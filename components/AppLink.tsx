import { Text, StyleSheet } from "react-native";
import { Link, LinkProps } from "expo-router";
import { useTheme } from "@/theme";

export function AppLink({ children, style, ...props }: LinkProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    link: {
      color: theme.colors.primary,
      fontSize: theme.fontSize.sm,
      fontWeight: theme.fontWeight.medium,
    },
  });

  return (
    <Link {...props}>
      <Text style={[styles.link, style]}>{children}</Text>
    </Link>
  );
}
