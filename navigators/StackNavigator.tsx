import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@screens';
import { INavigatorParamList } from '@types';

const Stack = createStackNavigator<INavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
