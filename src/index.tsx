import { requireNativeComponent, ViewStyle } from 'react-native';

type SizeClassProps = {
  color: string;
  style: ViewStyle;
};

export const SizeClassViewManager = requireNativeComponent<SizeClassProps>(
'SizeClassView'
);

export default SizeClassViewManager;
