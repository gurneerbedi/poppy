import { View, StyleSheet, Alert } from "react-native";
import { Theme, useStyles } from "@/theme";
import { Input, Button, Title, Subtitle, Screen } from "@/components/ui";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignUp() {
  const { styles } = useStyles(makeStyles);
  const { signUp } = useAuth();

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      Alert.alert("Error", "Please enter email, name and password");
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, name);
      setEmail("");
      setPassword("");
      setName("");
    } catch (error: any) {
      Alert.alert("Sign-Up Failed", error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <Subtitle>Sign up to continue</Subtitle>

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
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
        />

        <Button
          title={loading ? "Signing in..." : "Sign up"}
          onPress={handleSignUp}
          disabled={loading}
        />
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
  });
}
