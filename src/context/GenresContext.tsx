"use client"

import { useGenres } from "@/hooks/useMovies"
import { Genre } from "@/types/movie"
import { createContext, useContext, type ReactNode } from "react"

interface GenresContextType {
  genres: Genre[]
  isLoading: boolean
  getGenreNames: (genreIds: number[]) => string
}

const GenresContext = createContext<GenresContextType | undefined>(undefined)

export function GenresProvider({ children }: { children: ReactNode }) {
  const { genres = [], isLoading } = useGenres()

  const getGenreNames = (genreIds: number[]): string => {
    if (!genres.length || !genreIds.length) return ""

    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(", ")
  }

  return <GenresContext.Provider value={{ genres, isLoading, getGenreNames }}>{children}</GenresContext.Provider>
}

export function useGenresContext() {
  const context = useContext(GenresContext)
  if (context === undefined) {
    throw new Error("useGenresContext must be used within a GenresProvider")
  }
  return context
}

