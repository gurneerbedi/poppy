import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import { Button, Title, AppLink, Screen } from "@/components/ui";

import { useAuth } from "@/contexts/AuthContext";

export default function Index() {
  const { styles } = useStyles(makeStyles);
  const { user, logout } = useAuth();

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <View style={styles.card}>
        <Title>Hello, {user!.name}!</Title>
        <Button title="Logout" onPress={logout} />
        <View style={styles.links}>
          <AppLink href="/profile">Profile</AppLink>
        </View>
      </View>
    </Screen>
  );
}

function makeStyles(theme: Theme) {
  return StyleSheet.create({
    card: {
      width: "100%",
      maxWidth: 400,
      backgroundColor: theme.colors.card,
      borderRadius: theme.radius.lg,
      padding: theme.spacing.xl,
      ...theme.shadow.card,
    },
    links: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing.lg,
    },
  });
}
