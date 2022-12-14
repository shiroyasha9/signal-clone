import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@themes';
import { StyleSheet, Text, View } from 'react-native';

type FormLabelProps = {
  labelText: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  icon?: React.ReactNode;
  size?: number;
  color?: string;
};

export const FormLabel = (props: FormLabelProps) => {
  const { labelText, iconName, size, color, icon } = props;
  return (
    <View style={styles.labelContainer}>
      {icon ? (
        icon
      ) : (
        <MaterialIcons
          name={iconName}
          size={size || 20}
          color={color || Colors.royalBlue}
        />
      )}
      <Text style={styles.label}>{labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: Colors.labelGrey,
    fontSize: 16,
  },
});
