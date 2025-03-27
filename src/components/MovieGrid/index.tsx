import MovieCard from "../MovieCard";
import * as S from "./styles";
import { Movie } from "@/types";

type MovieGridProps = {
  movies: Movie[];
  isLoading: boolean;
};

export function MovieGrid({ movies, isLoading }: MovieGridProps) {
  if (isLoading) return <S.Loading>Carregando filmes...</S.Loading>;
  if (!movies?.length) return <S.Loading>Nenhum filme encontrado</S.Loading>;

  return (
    <S.Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </S.Grid>
  );
}
