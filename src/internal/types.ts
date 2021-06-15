import type { ViewProps } from 'react-native';

export enum SizeClassValue {
  unknown = 'unknown',
  regular = 'regular',
  compact = 'compact',
}

export interface SizeClass {
  horizontal: SizeClassValue;
  vertical: SizeClassValue;
}

export type NativeSizeClassViewProps = ViewProps & {
  children?: React.ReactNode;
};
