import { View, StyleSheet, ViewProps } from "react-native";
import { useTheme } from "@/theme";


export default function Screen({ children, style, ...props }: ViewProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing.lg,
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}
