import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '@screens';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

const Stack = createStackNavigator<NavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.royalBlue },
        headerTitleStyle: { color: Colors.white },
        headerTintColor: Colors.white,
        headerBackTitleVisible: false,
      }}
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
