import { Text, View } from "react-native";
import { styles } from "./styles";

type SaveValue = {
  current: string;
  target: string;
  percentage: number;
};

type Props = {
  data: SaveValue;
};

export function Progress({ data }: Props) {
  // Garante que a barra nunca ultrapasse o trilho, mesmo com dados inválidos
  const percentage = Math.min(Math.max(data.percentage, 0), 100);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor guardado</Text>

      <View style={styles.status}>
        <Text style={styles.value}>
          {data.current}
          <Text style={styles.target}> de {data.target}</Text>
        </Text>

        <Text style={styles.percentage}>{data.percentage.toFixed(0)}%</Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}
