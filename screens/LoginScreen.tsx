import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, Input } from '@rneui/themed';
import { userAtom } from '@stores';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

import { auth } from '../firebase';

type LoginScreenProps = StackScreenProps<NavigatorParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetAtom(userAtom);

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const registerHandler = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/600px-Signal-Logo.svg.png',
        }}
        style={{ width: 200, height: 200, borderRadius: 25 }}
      />
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          placeholder="rickroll@example.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          label="Password"
          placeholder="******"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Login"
        containerStyle={styles.button}
        onPress={loginHandler}
        color={Colors.royalBlue}
      />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    width: 300,
    marginTop: 40,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  registerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
