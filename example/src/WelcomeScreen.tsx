import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSizeClass } from 'react-native-size-class';

export const WelcomeScreen: React.FC = () => {
  const sizeClass = useSizeClass();

  React.useEffect(() => {
    console.log(`SIZE CLASS IS ${sizeClass.horizontal}`);
  }, [sizeClass]);

  return (
    <View style={styles.container}>
      <Text>Current horizontal size class: {sizeClass.horizontal}</Text>
      <Text>Current vertical size class: {sizeClass.vertical}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
});
