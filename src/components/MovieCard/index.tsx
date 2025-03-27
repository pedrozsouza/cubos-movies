"use client";

import { Movie } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Card, PosterContainer, InfoOverlay, Title, GenreText, RatingContainer, RatingCircle, Rating } from "./styles";
import { useGenres } from "@/hooks/useMovies";



interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const genres = useGenres();

  const getGenreNames = (genreIds: number[]) => {
    return genreIds
      .map((id) => genres.data.find((genre) => genre.id === id)?.name)
      .filter(Boolean) 
      .join(", ");
  };

  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PosterContainer>
          {movie.poster_path ? (
            <Image
              src={movie.poster_path}
              alt={movie.title}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#3a3a3a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#e0e0e0", fontSize: "0.875rem" }}>
                Sem imagem
              </span>
            </div>
          )}

          {isHovered && (
            <InfoOverlay isHovered={isHovered}>
              <Title>{movie.title.toUpperCase()}</Title>
              <GenreText>{getGenreNames(movie.genre_ids)}</GenreText>
            </InfoOverlay>
          )}
        </PosterContainer>

        <RatingContainer isHovered={isHovered}>
          <RatingCircle>
            <Rating>{Math.round(movie.vote_average * 10)}%</Rating>
          </RatingCircle>
        </RatingContainer>
      </Card>
    </Link>
  );
};

export default MovieCard;
