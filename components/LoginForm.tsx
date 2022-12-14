import { Formik, FormikProps } from 'formik';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Button, Input } from '@rneui/base';
import { Colors } from '@themes';
import { FormLabel } from './FormLabel';

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  loginHandler: (
    values: LoginFormValues,
    resetSubmitHandler: () => void,
  ) => void;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().min(6).max(50).required(),
});

export const LoginForm = (props: LoginFormProps) => {
  const { loginHandler } = props;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) =>
        loginHandler(values, () => setSubmitting(false))
      }
      validateOnMount
    >
      {(props) => <LoginInnerForm {...props} />}
    </Formik>
  );
};

const LoginInnerForm = (props: FormikProps<LoginFormValues>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
  } = props;

  return (
    <View style={styles.inputContainer}>
      <Input
        label={<FormLabel labelText="Email" iconName="email" />}
        placeholder="rickroll@example.com"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        errorMessage={
          errors.email && touched.email
            ? 'Please enter a valid email address.'
            : undefined
        }
      />
      <Input
        label={<FormLabel labelText="Password" iconName="lock" />}
        placeholder="******"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secureTextEntry
        errorMessage={
          errors.password && touched.password
            ? 'Please enter a valid password.'
            : undefined
        }
      />

      <Button
        onPress={
          handleSubmit as unknown as (event: GestureResponderEvent) => void
        }
        title="Submit"
        containerStyle={styles.button}
        color={Colors.royalBlue}
        disabled={isSubmitting || !isValid}
        loading={isSubmitting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginTop: 40,
  },
  button: {
    width: 200,
    marginTop: 10,
    alignSelf: 'center',
  },
});
