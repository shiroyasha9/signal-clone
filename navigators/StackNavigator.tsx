import { useAtomValue } from 'jotai';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, RegisterScreen } from '@screens';
import { userAtom } from '@stores';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

const Stack = createStackNavigator<NavigatorParamList>();

const StackNavigator = () => {
  const user = useAtomValue(userAtom);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.royalBlue },
        headerTitleStyle: { color: Colors.white },
        headerTintColor: Colors.white,
        headerBackTitleVisible: false,
      }}
      initialRouteName={user ? 'Home' : 'Login'}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Welcome Back' }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Get Started' }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
