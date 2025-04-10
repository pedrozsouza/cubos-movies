"use client";
import { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import SearchIcon from "@/ui/icons/Search";
import FilterIcon from "@/ui/icons/Filter";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onToggleFilters: () => void;
  initialQuery?: string;
  showIconFilters?: boolean;
}

const SearchBar = ({
  onSearch,
  onToggleFilters,
  initialQuery = "",
  showIconFilters,
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, onSearch]);

  return (
    <S.SearchContainer>
      <S.SearchContent>
        <S.InputContainer>
          <S.SearchInput
            type="text"
            placeholder="Pesquise por filmes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.SearchIcon>
            <SearchIcon />
          </S.SearchIcon>
        </S.InputContainer>
        {showIconFilters && (
          <S.FilterButton type="button" onClick={onToggleFilters}>
            <FilterIcon />
          </S.FilterButton>
        )}
      </S.SearchContent>
    </S.SearchContainer>
  );
};

export default SearchBar;
