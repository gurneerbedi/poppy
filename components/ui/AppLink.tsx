import { Text, StyleSheet } from "react-native";
import { Link, LinkProps } from "expo-router";
import {Theme, useStyles} from "@/theme";

export default function AppLink({ children, style, ...props }: LinkProps) {
  const { styles } = useStyles(makeStyle);
  return (
    <Link {...props}>
      <Text style={[styles.link, style]}>{children}</Text>
    </Link>
  );
}
  const makeStyle = (theme:Theme) =>
    StyleSheet.create({ link: {
      color: theme.colors.primary,
      fontSize: theme.fontSize.sm,
      fontWeight: theme.fontWeight.medium,
    },});


