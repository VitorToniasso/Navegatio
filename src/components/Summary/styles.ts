import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 10,
    color: colors.blue[300],
    fontFamily: fonts.regular,
  },
  value: {
    fontSize: 10,
    color: colors.white,
    fontFamily: fonts.regular,
  },
});
