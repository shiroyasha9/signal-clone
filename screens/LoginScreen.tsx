import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSetAtom } from 'jotai';
import { Pressable, StyleSheet, View } from 'react-native';

import { LoginForm, Screen } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, Text } from '@rneui/base';
import { userAtom } from '@stores';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

import { auth } from '../firebase';

type LoginScreenProps = StackScreenProps<NavigatorParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const setUser = useSetAtom(userAtom);

  const loginHandler = (
    values: { email: string; password: string },
    resetSubmitHandler: () => void,
  ) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      })
      .finally(() => resetSubmitHandler());
  };

  const registerHandler = () => {
    navigation.navigate('Register');
  };

  return (
    <Screen style={styles.container}>
      <Image source={require('@assets/logo.png')} style={styles.logo} />

      <LoginForm loginHandler={loginHandler} />

      <View style={styles.registerText}>
        <Text>Not an existing user? </Text>
        <Pressable
          onPress={registerHandler}
          style={({ pressed }) => pressed && { opacity: 0.5 }}
        >
          <Text style={{ color: Colors.royalBlue }}>Register</Text>
        </Pressable>
      </View>

      <View style={{ height: 120 }} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
});
