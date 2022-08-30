package com.reactnativesizeclass;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SizeClassModule extends ReactContextBaseJavaModule {
  public static final String NAME = SizeClassModuleImpl.NAME;

  SizeClassModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return SizeClassModuleImpl.NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    SizeClassModuleImpl.multiply(a, b, promise);
  }
}
