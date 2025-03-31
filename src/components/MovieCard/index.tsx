"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types/movie";
import * as S from "./styles";
import { useGenresContext } from "@/context/GenresContext";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { getGenreNames } = useGenresContext();

  const genreNames = getGenreNames(movie.genre_ids || []);
  const ratingPercentage = Math.round((movie.vote_average ?? 0) * 10);

  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <S.Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <S.PosterContainer>
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || "Poster do"}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <S.EmptyStateImage>
              <span style={{ color: "#e0e0e0", fontSize: "0.875rem" }}>
                Sem imagem
              </span>
            </S.EmptyStateImage>
          )}

          <S.InfoOverlay>
            <S.Title>{movie?.title?.toUpperCase() || "--"}</S.Title>
            <S.GenreText $isVisible={isHovered}>
              {genreNames || "Gênero não disponível"}
            </S.GenreText>
          </S.InfoOverlay>
        </S.PosterContainer>

        <S.RatingContainer $isVisible={isHovered}>
          <S.RatingCircle>
            <S.RatingProgress $percentage={ratingPercentage} />
            <S.RatingText $percentage={ratingPercentage}>
              {ratingPercentage}%
            </S.RatingText>
          </S.RatingCircle>
        </S.RatingContainer>
      </S.Card>
    </Link>
  );
};

export default MovieCard;
