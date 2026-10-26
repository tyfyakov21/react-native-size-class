import type { CodegenTypes, HostComponent, ViewProps } from 'react-native';
import { codegenNativeComponent } from 'react-native';

export type SizeClassChangeEvent = {
  horizontalSizeClass: string;
  verticalSizeClass: string;
};

export interface NativeProps extends ViewProps {
  onSizeClassChange?:
    | CodegenTypes.BubblingEventHandler<SizeClassChangeEvent>
    | null;
}

export default codegenNativeComponent<NativeProps>(
  'RNSizeClassView'
) as HostComponent<NativeProps>;
