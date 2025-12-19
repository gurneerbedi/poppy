import { Text, StyleSheet, TextProps } from "react-native";
import { useTheme } from "@/theme";

type TitleProps = TextProps & {
  children: React.ReactNode;
};

type SubtitleProps = TextProps & {
  children: React.ReactNode;
};

export function Title({ children, style, ...props }: TextProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    title: {
      fontSize: theme.fontSize.lg,
      fontWeight: theme.fontWeight.bold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.xs,
    },
  });

  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}

export function Subtitle({ children, style, ...props }: TextProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    subtitle: {
      fontSize: theme.fontSize.md,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xxl,
    },
  });

  return (
    <Text style={[styles.subtitle, style]} {...props}>
      {children}
    </Text>
  );
}
