import useSWR from "swr";
import type {
  MovieResponse,
  MovieDetails,
  GenresResponse,
} from "@/types/movie";
import { api } from "@/services/api";

// Define o fetcher diretamente nos hooks
const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function usePopularMovies(page = 1) {
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    `/movie/popular?page=${page}`,
    fetcher
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

export function useSearchMovies(query: string, page = 1) {
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    query ? `/search/movie?query=${query}&page=${page}` : null,
    fetcher
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

export function useDiscoverMovies(params: Record<string, any>) {
  const paramString = new URLSearchParams(params).toString();
  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    `/discover/movie?${paramString}`,
    fetcher
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
    movieId ? `/movie/${movieId}?append_to_response=videos,credits` : null,
    fetcher
  );

  return {
    movie: data,
    error,
    isLoading,
  };
}

export function useGenres() {
  const { data, error, isLoading } = useSWR<GenresResponse>(
    "/genre/movie/list",
    fetcher
  );

  return {
    genres: data?.genres || [],
    error,
    isLoading,
  };
}
