import { colors } from "@/theme";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, style, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
}
