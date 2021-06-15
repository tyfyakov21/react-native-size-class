import * as React from 'react';
import { SizeClassProvider } from 'react-native-size-class';
import { WelcomeScreen } from './WelcomeScreen';

export default function App() {
  return (
    <SizeClassProvider>
      <WelcomeScreen />
    </SizeClassProvider>
  );
}
