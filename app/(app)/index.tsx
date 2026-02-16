import { View, StyleSheet } from "react-native";
import { Theme, useStyles } from "@/theme";
import {
  Button,
  Title,
  AppLink,
  Screen,
  Subtitle,
  Input,
} from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useInsertMovie, useMovies } from "@/db/hooks/useMovies";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Index() {
  const { styles } = useStyles(makeStyles);
  const { data: movies } = useMovies();
  console.log(!!movies);
  const mutation = useInsertMovie();
  const [friendId, setFriendId] = useState("");

  const { user, logout } = useAuth();
  const addFriend = async () => {
    let { data, error } = await supabase.rpc("add_friend", {
      other_user: friendId,
    });

    if (error) console.warn(error.message);
    else console.log(data);
  };

  const addMovies = async () => {
    mutation.mutate({
      name: "matrix",
      description: "neo",
    });
  };

  return (
    <Screen>
      <Title>Welcome Back</Title>
      <View style={styles.card}>
        <Title>Hello, {user!.name}!</Title>
        <Subtitle>We have {movies?.length} movies</Subtitle>
        <Button title="Logout" onPress={logout} />
        <Button title="Add movies" onPress={addMovies} />
        <Input
          placeholder="Add friend id"
          value={friendId}
          onChangeText={setFriendId}
        />
        <Button title="Add Friend" onPress={addFriend} />
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
