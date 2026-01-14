import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { Theme, useStyles } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button({ title, style, ...props }: Props) {
  const { styles } = useStyles(makeStyles);
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

  const makeStyles  = (theme: Theme) => StyleSheet.create({
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

 
