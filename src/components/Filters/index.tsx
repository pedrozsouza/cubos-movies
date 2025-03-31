"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

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
  const tempYearRef = useRef(year?.toString() || "");
  const tempGenreRef = useRef(genre?.toString() || "");
  const tempSortByRef = useRef(sortBy);
  const [renderKey, setRenderKey] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFilters({
      year: tempYearRef.current ? Number(tempYearRef.current) : undefined,
      genre: tempGenreRef.current ? Number(tempGenreRef.current) : undefined,
      sortBy: tempSortByRef.current,
    });
  };

  const handleReset = () => {
    resetFilters();
    tempYearRef.current = "";
    tempGenreRef.current = "";
    tempSortByRef.current = "popularity.desc";
    setRenderKey((prev) => prev + 1);
  };

  const currentYear = new Date().getFullYear();
   const startYear = 1900;
   const years = Array.from(
     { length: currentYear - startYear + 1 },
     (_, i) => currentYear - i
   );

  useEffect(() => {
    tempYearRef.current = year?.toString() || "";
    tempGenreRef.current = genre?.toString() || "";
    tempSortByRef.current = sortBy;
  }, [year, genre, sortBy]);

  return (
    <S.FiltersContainer key={renderKey}>
      <S.FiltersTitle>Filtros</S.FiltersTitle>
      <S.FilterForm onSubmit={handleSubmit}>
        <S.FilterGroup>
          <S.FilterLabel htmlFor="year">Ano</S.FilterLabel>
          <S.SelectWrapper>
            <S.FilterSelect
              id="year"
              defaultValue={tempYearRef.current}
              onChange={(e) => (tempYearRef.current = e.target.value)}
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
              defaultValue={tempGenreRef.current}
              onChange={(e) => (tempGenreRef.current = e.target.value)}
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
              defaultValue={tempSortByRef.current}
              onChange={(e) => (tempSortByRef.current = e.target.value)}
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
