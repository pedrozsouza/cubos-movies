"use client"

import type React from "react"

import { useState, useEffect } from "react"
import * as S from "./styles"
import SearchIcon from "@/ui/icons/Search"
import FilterIcon from "@/ui/icons/Filter"

interface SearchBarProps {
  onSearch: (query: string) => void
  onToggleFilters: () => void
  initialQuery?: string
}

const SearchBar = ({ onSearch, onToggleFilters, initialQuery = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <S.SearchContainer>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex" }}>
        <S.SearchIcon>
          <SearchIcon />
        </S.SearchIcon>
        <S.SearchInput
          type="text"
          placeholder="Pesquise por filmes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.FilterButton type="button" onClick={onToggleFilters}>
          <FilterIcon />
        </S.FilterButton>
      </form>
    </S.SearchContainer>
  )
}

export default SearchBar

