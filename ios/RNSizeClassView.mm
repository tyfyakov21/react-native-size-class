#import "RNSizeClassView.h"

#import <react/renderer/components/RNSizeClassSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNSizeClassSpec/EventEmitters.h>
#import <react/renderer/components/RNSizeClassSpec/Props.h>
#import <react/renderer/components/RNSizeClassSpec/RCTComponentViewHelpers.h>
#import <react/renderer/components/RNSizeClassSpec/ShadowNodes.h>

using namespace facebook::react;

@interface RNSizeClassView () <RCTRNSizeClassViewViewProtocol>
@end

@implementation RNSizeClassView {
  UIUserInterfaceSizeClass _lastHorizontalSizeClass;
  UIUserInterfaceSizeClass _lastVerticalSizeClass;
  BOOL _hasSentInitialSizeClass;
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    _props = RNSizeClassViewShadowNode::defaultSharedProps();
  }

  return self;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNSizeClassViewComponentDescriptor>();
}

- (void)didMoveToWindow
{
  [super didMoveToWindow];
  [self emitSizeClassIfNeeded];
}

- (void)traitCollectionDidChange:(UITraitCollection *)previousTraitCollection
{
  [super traitCollectionDidChange:previousTraitCollection];
  [self emitSizeClassIfNeeded];
}

- (void)updateEventEmitter:(const EventEmitter::Shared &)eventEmitter
{
  [super updateEventEmitter:eventEmitter];
  [self emitSizeClassIfNeeded];
}

- (void)emitSizeClassIfNeeded
{
  if (self.window == nil || !_eventEmitter) {
    return;
  }

  UIUserInterfaceSizeClass horizontal = self.traitCollection.horizontalSizeClass;
  UIUserInterfaceSizeClass vertical = self.traitCollection.verticalSizeClass;
  if (_hasSentInitialSizeClass && horizontal == _lastHorizontalSizeClass &&
      vertical == _lastVerticalSizeClass) {
    return;
  }

  _hasSentInitialSizeClass = YES;
  _lastHorizontalSizeClass = horizontal;
  _lastVerticalSizeClass = vertical;

  auto sizeClassName = [](UIUserInterfaceSizeClass sizeClass) {
    switch (sizeClass) {
      case UIUserInterfaceSizeClassCompact:
        return "compact";
      case UIUserInterfaceSizeClassRegular:
        return "regular";
      default:
        return "unknown";
    }
  };

  auto horizontalName = sizeClassName(horizontal);
  auto verticalName = sizeClassName(vertical);
  RNSizeClassViewEventEmitter::OnSizeClassChange event = {horizontalName, verticalName};
  [self eventEmitter].onSizeClassChange(event);
}

- (const RNSizeClassViewEventEmitter &)eventEmitter
{
  return static_cast<const RNSizeClassViewEventEmitter &>(*_eventEmitter);
}

@end
