import { StyleSheet } from "react-native";
import { colors, fonts } from "@/theme";
import { Summary } from "../Summary";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
    paddingBottom: 18,
    gap: 24,
  },
  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fonts.regular,
  },
  total: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.medium,
  },
  Summary: {
    width: "100%",
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
