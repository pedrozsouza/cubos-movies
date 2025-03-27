"use client"

import type React from "react"

import { useState } from "react"
import * as S from "./styles"
import { useGenresContext } from "@/context/GenresContext"
import ChevronIcon from "@/ui/icons/Chevron"

export type FilterValues = {
  year?: number
  genre?: number
  sortBy?: string
}

interface FiltersProps {
  onApplyFilters: (filters: FilterValues) => void
  onResetFilters: () => void
  initialFilters?: FilterValues
}

const Filters = ({ onApplyFilters, onResetFilters, initialFilters = {} }: FiltersProps) => {
  const { genres, isLoading } = useGenresContext()
  const [year, setYear] = useState<string>(initialFilters.year?.toString() || "")
  const [genre, setGenre] = useState<string>(initialFilters.genre?.toString() || "")
  const [sortBy, setSortBy] = useState<string>(initialFilters.sortBy || "popularity.desc")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const filters: FilterValues = {
      sortBy,
    }

    if (year) {
      filters.year = Number.parseInt(year)
    }

    if (genre) {
      filters.genre = Number.parseInt(genre)
    }

    onApplyFilters(filters)
  }

  const handleReset = () => {
    setYear("")
    setGenre("")
    setSortBy("popularity.desc")
    onResetFilters()
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtros</S.FiltersTitle>
      <S.FilterForm onSubmit={handleSubmit}>
        <S.FilterGroup>
          <S.FilterLabel htmlFor="year">Ano</S.FilterLabel>
          <S.SelectWrapper>
            <S.FilterSelect
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
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
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
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
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
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
}

export default Filters

