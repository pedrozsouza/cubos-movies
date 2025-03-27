"use client";

import type React from "react";
import { useRef } from "react";

import * as S from "./styles";
import { useGenresContext } from "@/context/GenresContext";
import ChevronIcon from "@/ui/icons/Chevron";
import { useCurrentFilters, useFilterActions } from "@/store/useFilterStore";

export type FilterValues = {
  year?: number;
  genre?: number;
  sortBy?: string;
};

const Filters = () => {
  const { genres, isLoading } = useGenresContext();
  const { year, genre, sortBy } = useCurrentFilters();
  const { setFilters, resetFilters } = useFilterActions();

  const yearRef = useRef(year?.toString() || "");
  const genreRef = useRef(genre?.toString() || "");
  const sortByRef = useRef(sortBy);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFilters({
      year: yearRef.current ? Number(yearRef.current) : undefined,
      genre: genreRef.current ? Number(genreRef.current) : undefined,
      sortBy: sortByRef.current,
    });
  };

  const handleReset = () => {
    resetFilters();
    yearRef.current = "";
    genreRef.current = "";
    sortByRef.current = "popularity.desc";
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtros</S.FiltersTitle>
      <S.FilterForm onSubmit={handleSubmit}>
        <S.FilterGroup>
          <S.FilterLabel htmlFor="year">Ano</S.FilterLabel>
          <S.SelectWrapper>
            <S.FilterSelect
              id="year"
              defaultValue={yearRef.current}
              onChange={(e) => (yearRef.current = e.target.value)}
            >
              <option value="">Todos os anos</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </S.FilterSelect>
            <S.SelectIcon>
              <ChevronIcon />
            </S.SelectIcon>
          </S.SelectWrapper>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel htmlFor="genre">Gênero</S.FilterLabel>
          <S.SelectWrapper>
            <S.FilterSelect
              id="genre"
              defaultValue={genreRef.current}
              onChange={(e) => (genreRef.current = e.target.value)}
            >
              <option value="">Todos os gêneros</option>
              {!isLoading &&
                genres.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
            </S.FilterSelect>
            <S.SelectIcon>
              <ChevronIcon />
            </S.SelectIcon>
          </S.SelectWrapper>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel htmlFor="sortBy">Ordenar por</S.FilterLabel>
          <S.SelectWrapper>
            <S.FilterSelect
              id="sortBy"
              defaultValue={sortByRef.current}
              onChange={(e) => (sortByRef.current = e.target.value)}
            >
              <option value="popularity.desc">Popularidade (maior)</option>
              <option value="popularity.asc">Popularidade (menor)</option>
              <option value="vote_average.desc">Avaliação (maior)</option>
              <option value="vote_average.asc">Avaliação (menor)</option>
              <option value="release_date.desc">
                Data de lançamento (recente)
              </option>
              <option value="release_date.asc">
                Data de lançamento (antiga)
              </option>
              <option value="original_title.asc">Título (A-Z)</option>
              <option value="original_title.desc">Título (Z-A)</option>
            </S.FilterSelect>
            <S.SelectIcon>
              <ChevronIcon />
            </S.SelectIcon>
          </S.SelectWrapper>
        </S.FilterGroup>

        <S.ButtonsContainer>
          <S.SecondaryButton type="button" onClick={handleReset}>
            Limpar
          </S.SecondaryButton>
          <S.PrimaryButton type="submit">Aplicar</S.PrimaryButton>
        </S.ButtonsContainer>
      </S.FilterForm>
    </S.FiltersContainer>
  );
};

export default Filters;
