import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';

import { Button, Image, Input } from '@rneui/themed';
import { Colors } from '@themes';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    console.log('Sign in');
  };

  const registerHandler = () => {
    console.log('Register');
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
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
        />
        <Input
          label="Password"
          placeholder="******"
          autoFocus
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Login"
        containerStyle={styles.button}
        onPress={signInHandler}
        color={Colors.royalBlue}
      />
      <Button
        title="Register"
        containerStyle={styles.button}
        type="outline"
        onPress={registerHandler}
        color={Colors.royalBlue}
      />
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
});
