# `react-native-size-class`

Get updates when the iOS or iPadOS horizontal or vertical size class changes. This is useful when adapting an interface to different device sizes and window configurations.

## Compatibility

- React Native 0.82 or newer, using the New Architecture (Fabric).
- iOS and iPadOS size class reporting.
- Android is not currently supported for size class reporting; values remain `unknown`.

This library uses a Fabric native component and does not support the legacy React Native architecture.

## Installation

Install the package:

```sh
npm install react-native-size-class
```

For iOS and iPadOS, install the CocoaPods dependencies:

```sh
npx pod-install
```

React Native autolinking handles native package linking.

## Usage

Wrap the part of your app that needs size class updates in `SizeClassProvider`:

```tsx
import { SizeClassProvider } from 'react-native-size-class';
import { AppContent } from './AppContent';

export default function App() {
  return (
    <SizeClassProvider>
      <AppContent />
    </SizeClassProvider>
  );
}
```

Read the current values with `useSizeClass` in a descendant of the provider:

```tsx
import { Text } from 'react-native';
import { useSizeClass } from 'react-native-size-class';

export function AppContent() {
  const { horizontal, vertical } = useSizeClass();

  return (
    <Text>
      Horizontal: {horizontal}; vertical: {vertical}
    </Text>
  );
}
```

Each value is `compact`, `regular`, or `unknown`. On iOS and iPadOS, the hook updates when the native size class changes.

## Contributing

See the [contributing guide](CONTRIBUTING.md) for the development workflow.

## Maintainer

[Nikita Tiufiakov](https://github.com/tyfyakov21)

## License

MIT
