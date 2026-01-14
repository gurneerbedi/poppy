import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import {
  Input,
  Button,
  Title,
  Subtitle,
  AppLink,
  Screen,
} from "@/components/ui";
import { useState } from "react";

type User = { email: string };

export default function Index() {
  const { styles } = useStyles(makeStyles);

  // Session variable
  const [user, setUser] = useState<User | null>(null);

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const login = () => {
    if (email && password) {
      setUser({ email });
      setEmail("");
      setPassword("");
    } else {
      alert("Please enter email and password");
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <Subtitle>Sign in to continue</Subtitle>

      <View style={styles.card}>
        {user ? (
          <>
            <Title>Hello, {user.email}!</Title>
            <Button title="Logout" onPress={logout} />
            <View style={styles.links}>
              <AppLink href="/profile">Profile</AppLink>
            </View>
          </>
        ) : (
          <>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Button title="Login" onPress={login} />
            <View style={styles.links}>
              <AppLink href="/about">About</AppLink>
            </View>
          </>
        )}
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
