import { colors } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import { Text, View } from "react-native";
import { Separador } from "../Separador";

export type HomeHeaderProps = {
  total: string;
};
type Props = {
  data: HomeHeaderProps;
};

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui</Text>
      </View>
      <Separador color={colors.blue[400]} />
      <View>
        <Text style={styles.total}>{data.total}</Text>
      </View>
    </LinearGradient>
  );
}
