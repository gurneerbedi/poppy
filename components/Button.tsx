import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useTheme } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, style, ...props }: Props) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center",
      marginTop: theme.spacing.sm,
    },
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      fontWeight: theme.fontWeight.semiBold,
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
