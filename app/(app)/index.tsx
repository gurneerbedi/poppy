import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import { Button, Title, AppLink, Screen, Subtitle } from "@/components/ui";
import { useEffect } from "react";

import { useAuth } from "@/contexts/AuthContext";

import { useState } from "react";
import { Movie } from "@/db/types";
import { fetchMovies, insertMovie } from "@/db/movies";

export default function Index() {
  const { styles } = useStyles(makeStyles);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { user, logout } = useAuth();
  const addMovies = async () => {
    await insertMovie({
      name: "matrix",
      description: "neo",
    });
    getMovies();
  };

  const getMovies = async () => {
    const data = await fetchMovies();
    setMovies(data || []);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <View style={styles.card}>
        <Title>Hello, {user!.name}!</Title>
        <Subtitle>We have {movies.length} movies</Subtitle>
        <Button title="Logout" onPress={logout} />
        <Button title="Add movies" onPress={addMovies} />

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
