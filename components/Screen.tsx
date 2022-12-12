import { KeyboardAvoidingView, Platform, StyleSheet, ViewProps } from 'react-native';

import { Colors } from '@themes';

type ScreenProps = {
  children: React.ReactNode;
};

export const Screen: React.FC<ScreenProps & ViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
});
