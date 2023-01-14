import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { TabNavigator } from './src/navigation/TabNavigator';
import { store } from './src/store';
import { Provider } from 'react-redux';
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView style={styles.container}>
          {/* <RootNavigator /> */}
          <Provider store={store}>
            <TabNavigator />
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
