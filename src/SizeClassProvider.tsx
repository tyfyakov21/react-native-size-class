import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { SizeClassContext } from './SizeClassContext';
import { SizeClassValue } from './internal/types';
import { SizeClassView } from './SizeClassView.native';
import { nativeEventsEmitter } from './internal';

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

  const sizeClassChangeEventName = 'SizeClassChangeEvent';

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const listener = nativeEventsEmitter().addListener(
        sizeClassChangeEventName,
        (notification) => {
          console.log(notification);
          setHorizontalSizeClass(notification.horizontalSizeClass);
          setVerticalSizeClass(notification.verticalSizeClass);
        }
      );

      return () => {
        listener.remove();
      };
    } else {
      return () => {};
    }
  }, []);

  return (
    <SizeClassContext.Provider
      value={{ horizontal: horizontalSizeClass, vertical: verticalSizeClass }}
    >
      <SizeClassView style={{ height: '100%' }}>{props.children}</SizeClassView>
    </SizeClassContext.Provider>
  );
};
