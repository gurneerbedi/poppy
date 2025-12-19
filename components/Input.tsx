import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@/theme";

export function Input(props: TextInputProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radius.md,
      paddingHorizontal: theme.spacing.md,
      fontSize: theme.fontSize.md,
      marginBottom: theme.spacing.md,
      color: theme.colors.textPrimary,
    },
  });

  return (
    <TextInput
      placeholderTextColor={theme.colors.textMuted}
      style={styles.input}
      {...props}
    />
  );
}
