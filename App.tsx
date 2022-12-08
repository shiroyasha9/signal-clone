import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { LogBox, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigator from '@navigators/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { userAtom } from '@stores';
import { NavigatorParamList } from '@types';

// Extend RootParamList to ensure type safety
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigatorParamList {}
  }
}

// Ignore AsyncStorage warning (comes from Expo)
LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);

// Preload neccessary atoms to use on app mount
const Preloader = () => {
  useAtomValue(userAtom); // The value will be pre-loaded
  return null;
};

export default function App() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Preloader />
      <SafeAreaProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Suspense>
  );
}
