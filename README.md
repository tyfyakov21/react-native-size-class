# `react-native-size-class`

React Native library that allows you to get an information about size class changes on device.

## Getting started

Install the library using npm:
```sh
npm install --save react-native-size-class
```

#### Using React Native >= 0.60
Linking the package manually is not required anymore with [Autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

- **iOS Platform:**

  `$ npx pod-install` # CocoaPods on iOS needs this extra step

  #### Using React Native < 0.60

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
react-native link react-native-size-class
```

If you can't or don't want to use the CLI tool, you can also manually link the library using the instructions below (click on the arrow to show them):

<details>
<summary>Manually link the library on iOS</summary>

Either follow the [instructions in the React Native documentation](https://facebook.github.io/react-native/docs/linking-libraries-ios#manual-linking) to manually link the framework or link using [Cocoapods](https://cocoapods.org) by adding this to your `Podfile`:

```ruby
pod 'react-native-size-class', :path => '../node_modules/react-native-size-class'
```

</details>

## Usage
First, wrap your app in 'SizeClassProvider' component:

```js
import { SizeClassProvider } from 'react-native-size-class';
const App = () => {
  return (
    <SizeClassProvider>
      <YourApp>
    </SizeClassProvider>
  );
}
```

Then, inside YourApp component call 'useSizeClass' hook:

```js
import { useSizeClass } from 'react-native-size-class';
```

Receive updates on size class changes
```js
 const {horizontal, vertical} = useSizeClass();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Maintainers

* [Nikita Tiufiakov](https://github.com/tyfyakov21) - [React Native/iOS Developer at Pipedrive](https://www.pipedrive.com/)

## License

MIT
