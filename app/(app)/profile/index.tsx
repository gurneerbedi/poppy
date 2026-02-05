import { Screen, Subtitle, Title, Button } from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { Movie } from "@/db/types";
import { fetchMovies, insertMovie } from "@/db/movies";

export default function Profile() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const data = await fetchMovies();
    setMovies(data || []);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const addMovies = async () => {
    await insertMovie({
      name: "matrix",
      description: "neo",
    });
    getMovies();
  };

  return (
    <Screen>
      <Title>Profile Page</Title>
      <Subtitle>Hi {user!.email}</Subtitle>
      <Subtitle>We have {movies.length} movies</Subtitle>
      <Button title="Add movies" onPress={addMovies} />
    </Screen>
  );
}
