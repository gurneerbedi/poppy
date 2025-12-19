import { View, StyleSheet } from "react-native";
import { useTheme } from "@/theme";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Title, Subtitle } from "@/components/Typography";
import { AppLink } from "@/components/AppLink";
import { Screen } from "@/components/Screen";

export default function Index() {
  const theme = useTheme();
  const styles = StyleSheet.create({
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
  return (
    <Screen>
      <Title>Welcome Back</Title>
      <Subtitle>Sign in to continue</Subtitle>

      <View style={styles.card}>
        <Input placeholder="Email" keyboardType="email-address" />

        <Input placeholder="Password" secureTextEntry />

        <Button title="login" />

        <View style={styles.links}>
          <AppLink href="/about">About</AppLink>
          <AppLink href="/profile">Profile</AppLink>
        </View>
      </View>
    </Screen>
  );
}
