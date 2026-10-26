package com.reactnativesizeclass;

import androidx.annotation.NonNull;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.RNSizeClassViewManagerDelegate;
import com.facebook.react.viewmanagers.RNSizeClassViewManagerInterface;

public class SizeClassViewManager extends SimpleViewManager<SizeClassView>
    implements RNSizeClassViewManagerInterface<SizeClassView> {
  public static final String REACT_CLASS = "RNSizeClassView";
  private final ViewManagerDelegate<SizeClassView> delegate =
      new RNSizeClassViewManagerDelegate<>(this);

  @NonNull
  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected SizeClassView createViewInstance(ThemedReactContext context) {
    return new SizeClassView(context);
  }

  @Override
  public ViewManagerDelegate<SizeClassView> getDelegate() {
    return delegate;
  }
}
