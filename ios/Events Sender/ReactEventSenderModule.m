//
//  ReactEventSenderModule.m
//  SizeClass
//
//  Created by Nikita Tiufiakov on 15.06.2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(ReactEventSenderModule, RCTEventEmitter)
    RCT_EXTERN_METHOD(supportedEvents)
@end
