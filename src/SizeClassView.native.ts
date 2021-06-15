import { requireNativeComponent } from 'react-native';
import type { NativeSizeClassViewProps } from './internal/types';

export const SizeClassView =
  requireNativeComponent<NativeSizeClassViewProps>('RNSizeClassView');
