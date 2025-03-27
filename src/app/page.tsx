"use client";

import { useState, useEffect, useMemo } from "react";
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
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialFilters: FilterValues = {
    year: searchParams.get("year")
      ? Number(searchParams.get("year"))
      : undefined,
    genre: searchParams.get("genre")
      ? Number(searchParams.get("genre"))
      : undefined,
    sortBy: searchParams.get("sort_by") || "popularity.desc",
  };

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  // Define os parâmetros de pesquisa dinamicamente
  const searchParamsObj = useMemo(
    () => ({
      query: searchQuery,
      page: currentPage,
      year: filters.year,
    }),
    [searchQuery, currentPage, filters.year]
  );

  const discoverParams = useMemo(
    () => ({
      page: currentPage,
      primary_release_year: filters.year,
      with_genres: filters.genre?.toString(),
      sort_by: filters.sortBy,
    }),
    [currentPage, filters]
  );

  const popularMoviesResult = usePopularMovies(currentPage);
  const discoverMoviesResult = useDiscoverMovies(discoverParams);

  const { movies, totalPages, isLoading } = popularMoviesResult;

  // Atualiza os parâmetros da URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("query", searchQuery);
    if (currentPage > 1) params.set("page", String(currentPage));
    if (filters.year) params.set("year", String(filters.year));
    if (filters.genre) params.set("genre", String(filters.genre));
    if (filters.sortBy && filters.sortBy !== "popularity.desc") {
      params.set("sort_by", filters.sortBy);
    }

    router.replace(`?${params.toString()}`);
  }, [searchQuery, currentPage, filters, router]);

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
    setFilters({ sortBy: "popularity.desc" });
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
