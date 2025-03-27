/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";


const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjVhNmRlYjMyODU1ZjA4YjBmY2E1ODJkNDRjMTg5YSIsIm5iZiI6MTc0MzAxODA3NC44ODksInN1YiI6IjY3ZTQ1ODVhYjhmYzM5ODk5NjEwODYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6vbJBRNC1ag3k6XZhaGoC2XNL0G9ZCej-sl69NlqKAY";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  process.env.NEXT_PUBLIC_TMDB_API_KEY || "2f5a6deb32855f08b0fca582d44c189a";
const API_LANGUAGE = "pt-BR";
const API_REGION = "BR";

// Tipos de parâmetros para as chamadas à API
export type MovieSearchParams = {
  query?: string;
  page?: number;
  year?: number;
  genre?: number;
  sort_by?: string;
  with_genres?: string;
  primary_release_year?: number;
  vote_average_gte?: number;
  vote_average_lte?: number;
  with_original_language?: string;
};

// Função auxiliar para construir URLs com parâmetros
export const buildUrl = (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  // Adiciona os parâmetros padrão
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("language", API_LANGUAGE);
  url.searchParams.append("region", API_REGION);

  // Adiciona os parâmetros específicos
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.append(key, value.toString());
    }
  });

  return url.toString();
};

// Função para lidar com erros de requisição
export const handleApiError = (error: any) => {
  console.error("Erro na API:", error);
  throw new Error(error.message || "Erro ao comunicar com a API");
};

// Chaves SWR para os diferentes endpoints
export const SWR_KEYS = {
  popularMovies: (page: number) => buildUrl("/movie/popular", { page }),
  searchMovies: (params: MovieSearchParams) =>
    buildUrl("/search/movie", params),
  discoverMovies: (params: MovieSearchParams) =>
    buildUrl("/discover/movie", params),
  movieDetails: (movieId: number | string) =>
    buildUrl(`/movie/${movieId}`, { append_to_response: "videos,credits" }),
  genres: () => buildUrl("/genre/movie/list"),
};