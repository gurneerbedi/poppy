import { View, StyleSheet, Alert } from "react-native";
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
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

export default function Index() {
  const { styles } = useStyles(makeStyles);
  const { login } = useAuth();

  // Input states
  const [email, setEmail] = useState("g@bedi.com");
  const [password, setPassword] = useState("123123");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error: any) {
      Alert.alert("Login Failed", error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fetchMovies = async () => {
    const { data, error } = await supabase.from("movies").select();
    console.log(data);
    if (error) console.log(error);
  };

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <Subtitle>Sign in to continue</Subtitle>

      <View style={styles.card}>
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

        <Button
          title={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />
        <Button title="fetchmovies" onPress={fetchMovies} />

        <View style={styles.links}>
          <AppLink href="/about">About</AppLink>
          <AppLink href="/signup">Sign Up</AppLink>
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
