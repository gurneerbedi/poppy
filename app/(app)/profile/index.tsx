import { Screen, Subtitle, Title, Button } from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useInsertMovie, useMovies } from "@/db/hooks/useMovies";

export default function Profile() {
  const { user } = useAuth();
  const { data: movies, isPending, error } = useMovies();
  console.log(isPending, error, !!movies);
  const mutation = useInsertMovie();

  const addMovies = async () => {
    mutation.mutate({
      name: "matrix",
      description: "neo",
    });
  };
  return (
    <Screen>
      <Title>Profile Page</Title>
      <Subtitle>Hi {user!.email}</Subtitle>
      <Subtitle>We have {movies?.length} movies</Subtitle>
      <Button title="Add movies" onPress={addMovies} />
    </Screen>
  );
}
