import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, Input, Text } from '@rneui/themed';
import { Colors } from '@themes';
import { NavigatorParamList } from '@types';

type LoginScreenProps = StackScreenProps<NavigatorParamList, 'Register'>;

export const RegisterScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  const registerHandler = () => {
    console.log('Sign up');
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
          label="Name"
          placeholder="Rick Roll"
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="words"
        />
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
        <Input
          label="Profile Picture URL (optional)"
          placeholder="https://example.com/image.png"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={registerHandler}
        />
      </View>
      <Button
        title="Register"
        containerStyle={styles.button}
        onPress={registerHandler}
        color={Colors.royalBlue}
      />
      <View style={styles.registerText}>
        <Text>Already an existing user? </Text>
        <Pressable
          onPress={loginHandler}
          style={({ pressed }) => pressed && { opacity: 0.5 }}
        >
          <Text style={{ color: Colors.royalBlue }}>Login</Text>
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
