import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@screens';
import { Colors } from '@themes';
import { INavigatorParamList } from '@types';

const Stack = createStackNavigator<INavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.royalBlue },
        headerTitleStyle: { color: Colors.white },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
