import { create } from "zustand";

type FilterState = {
  searchQuery: string;
  currentPage: number;
  filters: {
    year?: number;
    genre?: number;
    sortBy: string;
  };
  actions: {
    setSearchQuery: (query: string) => void;
    setCurrentPage: (page: number) => void;
    setFilters: (filters: Partial<FilterState["filters"]>) => void;
    resetFilters: () => void;
  };
};

const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  currentPage: 1,
  filters: {
    sortBy: "popularity.desc",
  },
  actions: {
    setSearchQuery: (query) => set({ searchQuery: query }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setFilters: (newFilters) =>
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
      })),

    resetFilters: () =>
      set({
        filters: {
          year: undefined,
          genre: undefined,
          sortBy: "popularity.desc",
        },
        currentPage: 1,
      }),
  },
}));

export const useFilterActions = () => useFilterStore((state) => state.actions);
export const useSearchQuery = () =>
  useFilterStore((state) => state.searchQuery);
export const useCurrentPage = () =>
  useFilterStore((state) => state.currentPage);
export const useCurrentFilters = () => useFilterStore((state) => state.filters);
