"use client";

import { useState, useEffect, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import { lightTheme, darkTheme } from "@/styles/theme";
import * as S from "../styles/page/styles";
import MovieCard from "@/components/MovieCard";
import { useTheme } from "@/context/ThemeContext";
import { useDiscoverMovies } from "@/hooks/useMovies";
import {
  useCurrentPage,
  useFilterActions,
  useSearchQuery,
} from "@/store/useFilterStore";

export default function HomePage() {
  const searchQuery = useSearchQuery();
  const currentPage = useCurrentPage();
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;
  const [showFilters, setShowFilters] = useState(false);
  const [showIconFilters, setShowIconFilters] = useState(true);

  const { setSearchQuery, setCurrentPage } = useFilterActions();

  const discoverMoviesResult = useDiscoverMovies();

  const { movies, totalPages, isLoading } = discoverMoviesResult;

  const handleSearch = useMemo(() => {
    return (query: string) => {
      setSearchQuery(query);
      setCurrentPage(1);
    };
  }, [setCurrentPage, setSearchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery) {
      setShowIconFilters(false);
      setShowFilters(false);
    } else {
      setShowIconFilters(true);
    }
  }, [searchQuery]);

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
            showIconFilters={showIconFilters}
          />

          {showFilters && <Filters />}

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
