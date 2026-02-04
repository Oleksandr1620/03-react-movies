import axios from "axios";
import type { Movie, MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page = 1
): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
};
