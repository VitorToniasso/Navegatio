import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "@/theme";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isProcessing?: boolean;
};

export function Button({
  title,
  isProcessing = false,
  disabled,
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      disabled={isProcessing || disabled}
      {...rest}
    >
      {isProcessing ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
