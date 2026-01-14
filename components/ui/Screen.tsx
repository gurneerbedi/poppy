import { View, StyleSheet, ViewProps } from "react-native";
import { Theme, useStyles } from "@/theme";

export default function Screen({ children, style, ...props }: ViewProps) {
  const { styles } = useStyles(makeStyles);
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}
  const makeStyles = (theme: Theme) =>StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing.lg,
    },
  });


