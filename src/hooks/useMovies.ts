import useSWR from "swr";
import type {
  MovieResponse,
  MovieDetails,
  GenresResponse,
} from "@/types/movie";
import { api } from "@/services/api";
import {
  useCurrentFilters,
  useCurrentPage,
  useSearchQuery,
} from "@/store/useFilterStore";


const fetcher = (url: string) => api.get(url).then((res) => res.data);

const getKey = (
  searchQuery: string,
  currentPage: number,
  year?: number,
  genre?: number,
  sortBy?: string
) => {
  const apiPage = Math.ceil(currentPage / 2); 

  const params = new URLSearchParams({
    page: apiPage.toString(),
    include_adult: "false",
  });

  if (searchQuery) {
    params.set("query", searchQuery);
    return [`/search/movie`, params.toString()];
  }

  if (year) params.set("primary_release_year", year.toString());
  if (genre) params.set("with_genres", genre.toString());
  if (sortBy) params.set("sort_by", sortBy);

  return [`/discover/movie`, params.toString()];
};

export function useDiscoverMovies() {
  const { year, genre, sortBy } = useCurrentFilters();
  const searchQuery = useSearchQuery();
  const currentPage = useCurrentPage();

  const { data, error, isLoading, mutate } = useSWR<MovieResponse>(
    getKey(searchQuery, currentPage, year, genre, sortBy),
    ([url, params]: [string, string]) => fetcher(`${url}?${params}`)
  );

  return {
    movies: data?.results || [],
    totalPages: data?.total_pages || 0,
    totalResults: data?.total_results || 0,
    isLoading,
    error,
    revalidate: mutate,
  };
}

export function useMovieDetails(movieId: number | string) {
  const { data, error, isLoading } = useSWR<MovieDetails>(
    movieId ? `/movie/${movieId}?append_to_response=videos,credits` : undefined,
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
