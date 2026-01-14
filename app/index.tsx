import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import { Input, Button, Title, Subtitle, AppLink, Screen } from "@/components/ui";
import { useState } from "react";


export default function Index() {
  const { styles } = useStyles(makeStyles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log(email,password);
  }


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

        <Button title="login"  onPress={login}/>

        <View style={styles.links}>
          <AppLink href="/about">About</AppLink>
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
