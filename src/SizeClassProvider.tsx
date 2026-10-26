import React, { useState } from 'react';
import { Platform, type NativeSyntheticEvent } from 'react-native';
import { SizeClassContext } from './SizeClassContext';
import { SizeClassView } from './SizeClassView.native';
import { SizeClassValue } from './internal/types';
import type { SizeClassChangeEvent } from './RNSizeClassViewNativeComponent';

interface SizeClassProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const SizeClassProvider: React.FC<SizeClassProviderProps> = (
  props: SizeClassProviderProps
) => {
  const [horizontalSizeClass, setHorizontalSizeClass] =
    useState<SizeClassValue>(SizeClassValue.unknown);
  const [verticalSizeClass, setVerticalSizeClass] = useState<SizeClassValue>(
    SizeClassValue.unknown
  );

  const handleSizeClassChange = (
    event: NativeSyntheticEvent<SizeClassChangeEvent>
  ) => {
    setHorizontalSizeClass(
      event.nativeEvent.horizontalSizeClass as SizeClassValue
    );
    setVerticalSizeClass(event.nativeEvent.verticalSizeClass as SizeClassValue);
  };

  return (
    <SizeClassContext.Provider
      value={{ horizontal: horizontalSizeClass, vertical: verticalSizeClass }}
    >
      <SizeClassView
        style={{ height: '100%' }}
        onSizeClassChange={Platform.OS === 'ios' ? handleSizeClassChange : null}
      >
        {props.children}
      </SizeClassView>
    </SizeClassContext.Provider>
  );
};
