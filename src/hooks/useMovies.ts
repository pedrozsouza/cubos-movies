import { SWR_KEYS, type MovieSearchParams } from "@/services/api";
import type {
  MovieDetails,
  GenresResponse,
  MovieResponse,
} from "@/types/movie";
import useSWR from "swr";

export function usePopularMovies(page = 1) {
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    SWR_KEYS.popularMovies(page)
  );

  return {
    movies: data?.results || [],
    totalPages: data?.total_pages || 0,
    totalResults: data?.total_results || 0,
    error,
    isLoading,
    mutate,
  };
}

export function useSearchMovies(params: MovieSearchParams) {
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    params.query ? SWR_KEYS.searchMovies(params) : null
  );

  return {
    movies: data?.results || [],
    totalPages: data?.total_pages || 0,
    totalResults: data?.total_results || 0,
    error,
    isLoading,
    mutate,
  };
}

export function useDiscoverMovies(params: MovieSearchParams) {
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    SWR_KEYS.discoverMovies(params)
  );

  return {
    movies: data?.results || [],
    totalPages: data?.total_pages || 0,
    totalResults: data?.total_results || 0,
    error,
    isLoading,
    mutate,
  };
}

export function useMovieDetails(movieId: number | string) {
  const { data, error, isLoading } = useSWR<MovieDetails>(
    movieId ? SWR_KEYS.movieDetails(movieId) : null
  );

  return {
    movie: data,
    error,
    isLoading,
  };
}

export function useGenres() {
  const { data, error, isLoading } = useSWR<GenresResponse>(SWR_KEYS.genres());

  return {
    genres: data?.genres || [],
    error,
    isLoading,
  };
}
