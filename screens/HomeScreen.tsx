import { signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '@rneui/base';
import { userAtom } from '@stores';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

import { auth } from '../firebase';

type HomeScreenProps = StackScreenProps<NavigatorParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [user, setUser] = useAtom(userAtom);
  const logoutHandler = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigation.navigate('Login');
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Logout"
          color={Colors.royalBlue}
          onPress={logoutHandler}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>Welcome Home, {user?.displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
