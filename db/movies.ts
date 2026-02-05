import { supabase } from "@/lib/supabase";
import { Movie } from "./types";

export async function fetchMovies() {
  const { data, error } = await supabase.from("movies").select<"*", Movie>();
  if (error) console.log(error);
  return data;
}

export async function insertMovie(movie: any) {
  const { error } = await supabase.from("movies").insert(movie);
  if (error) throw error;
}
