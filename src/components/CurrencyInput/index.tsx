import { colors } from "@/theme";
import Input, { CurrencyInputProps } from "react-native-currency-input";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = CurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, style, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Input
        style={[styles.input, style]}
        placeholder="R$ 0,00"
        placeholderTextColor={colors.gray[400]}
        prefix="R$ "
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  );
}
