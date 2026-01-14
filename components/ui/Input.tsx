import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Theme, useStyles } from "@/theme";

export default function Input(props: TextInputProps) {
  const { styles, theme } = useStyles(makeStyles);
  return (
    <TextInput
      placeholderTextColor={theme.colors.textMuted}
      style={styles.input}
      {...props}
    />
  );
}

  const makeStyles = (theme: Theme) => 
    StyleSheet.create({
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


