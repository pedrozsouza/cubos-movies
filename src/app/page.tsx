"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import Filters, { type FilterValues } from "@/components/Filters";
import { lightTheme, darkTheme } from "@/styles/theme";
import * as S from "../styles/page/styles";
import MovieCard from "@/components/MovieCard";
import { useTheme } from "@/context/ThemeContext";
import { Movie } from "@/types";
import {
  useDiscoverMovies,
  usePopularMovies,
  useSearchMovies,
} from "@/hooks/useMovies";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  const initialQuery = searchParams.get("query") || "";
  const initialPage = Number.parseInt(searchParams.get("page") || "1");
  const initialYear = searchParams.get("year")
    ? Number.parseInt(searchParams.get("year") as string)
    : undefined;
  const initialGenre = searchParams.get("genre")
    ? Number.parseInt(searchParams.get("genre") as string)
    : undefined;
  const initialSortBy = searchParams.get("sort_by") || "popularity.desc";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    year: initialYear,
    genre: initialGenre,
    sortBy: initialSortBy,
  });

  const searchParams1 = {
    query: searchQuery,
    page: currentPage,
    year: filters.year,
  };

  const discoverParams = {
    page: currentPage,
    primary_release_year: filters.year,
    with_genres: filters.genre?.toString(),
    sort_by: filters.sortBy,
  };

  const {
    movies: popularMovies,
    totalPages: popularTotalPages,
    isLoading: isLoadingPopular,
  } = usePopularMovies(currentPage);
  const {
    movies: searchResults,
    totalPages: searchTotalPages,
    isLoading: isLoadingSearch,
  } = useSearchMovies(searchParams1);
  const {
    movies: discoverResults,
    totalPages: discoverTotalPages,
    isLoading: isLoadingDiscover,
  } = useDiscoverMovies(discoverParams);


  let movies: Movie[] = [];
  let totalPages = 0;
  let isLoading = false;

  if (searchQuery) {
    movies = searchResults;
    totalPages = searchTotalPages;
    isLoading = isLoadingSearch;
  } else if (
    filters.year ||
    filters.genre ||
    filters.sortBy !== "popularity.desc"
  ) {
    movies = discoverResults;
    totalPages = discoverTotalPages;
    isLoading = isLoadingDiscover;
  } else {
    movies = popularMovies;
    totalPages = popularTotalPages;
    isLoading = isLoadingPopular;
  }

  
  const updateUrlParams = (params: Record<string, any>) => {
    const url = new URL(window.location.href);

    
    Array.from(url.searchParams.keys()).forEach((key) => {
      url.searchParams.delete(key);
    });

    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value.toString());
      }
    });

   
    window.history.pushState({}, "", url);
  };

  
  useEffect(() => {
    updateUrlParams({
      query: searchQuery,
      page: currentPage,
      year: filters.year,
      genre: filters.genre,
      sort_by: filters.sortBy,
    });
  }, [searchQuery, currentPage, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyFilters = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setShowFilters(false);
  };

  const handleResetFilters = () => {
    setFilters({
      sortBy: "popularity.desc",
    });
    setCurrentPage(1);
    setShowFilters(false);
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <S.Container>
        <S.BackgroundImage>
          <Image
            src="/background.png"
            alt="Cinema background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </S.BackgroundImage>
        <Header />
        <S.Content>
          <S.Title>
            {searchQuery
              ? `Resultados para "${searchQuery}"`
              : "Filmes Populares"}
          </S.Title>

          <SearchBar
            onSearch={handleSearch}
            onToggleFilters={() => setShowFilters(!showFilters)}
            initialQuery={searchQuery}
          />

          {showFilters && (
            <Filters
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
            />
          )}

          {isLoading ? (
            <S.NoResults>Carregando...</S.NoResults>
          ) : movies.length > 0 ? (
            <>
              <S.MoviesGrid>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </S.MoviesGrid>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <S.NoResults>
              Nenhum filme encontrado. Tente uma pesquisa diferente.
            </S.NoResults>
          )}
        </S.Content>
        <Footer />
      </S.Container>
    </StyledThemeProvider>
  );
}
