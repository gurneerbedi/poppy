import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import { Button, Title, AppLink, Screen } from "@/components/ui";

import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

export default function Index() {
  const { styles } = useStyles(makeStyles);
  const { user, logout } = useAuth();
  const addMovies = async () => {
    const { data, error } = await supabase
      .from("movies")
      .insert([
        {
          name: "The Empire Strikes Back",
          description:
            "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.",
        },
        {
          name: "Return of the Jedi",
          description:
            "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.",
        },
      ])
      .select();
    console.log(data);
    if (error) console.log(error);
  };

  const fetchMovies = async () => {
    const { data, error } = await supabase.from("movies").select();
    console.log(data);
    if (error) console.log(error);
  };

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <View style={styles.card}>
        <Title>Hello, {user!.name}!</Title>
        <Button title="Logout" onPress={logout} />
        <Button title="Add movies" onPress={addMovies} />
        <Button title="Fetch movies" onPress={fetchMovies} />

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
