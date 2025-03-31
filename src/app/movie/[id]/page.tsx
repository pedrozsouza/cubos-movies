"use client";

import type React from "react";

import { useParams } from "next/navigation";
import Image from "next/image";
import * as S from "../../../styles/movieId/styles";
import Link from "next/link";
import { useMobile } from "@/hooks/useMobile";
import { useMovieDetails } from "@/hooks/useMovies";
import {
  translateMovieStatus,
  getLanguageName,
  getRatingPercentage,
  getTrailerKey,
} from "@/utils/movieUtils";
import ChevronIcon from "@/ui/icons/Chevron";
import { useMemo } from "react";
import { formatRuntime, formatCurrency, formatDate } from "@/utils/format";
import { Genre } from "@/types/movie";

export default function MoviePage() {
  const params = useParams();
  const id = params.id;
  const { movie, error, isLoading } = useMovieDetails(id as string);
  const { isMobile, isTablet } = useMobile();

  const getGenreNames = (genres: Genre[] | undefined) => {
    return genres?.map((genre) => (
      <S.GenreTag key={genre?.id}>{genre?.name || "Desconhecido"}</S.GenreTag>
    ));
  };

  const StatCard = ({ label, value }: { label: string; value: string }) => (
    <S.StatCard>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoValue>{value}</S.InfoValue>
    </S.StatCard>
  );

  const MobileStatCard = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <S.MobileStatCard>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoValue>{value}</S.InfoValue>
    </S.MobileStatCard>
  );

  const TabletStatCard = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <S.TabletStatCard>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoValue>{value}</S.InfoValue>
    </S.TabletStatCard>
  );

  const Rating = ({ percentage }: { percentage: number }) => (
    <S.RatingCircle>
      <S.RatingProgress $percentage={percentage} />
      <S.RatingText $percentage={percentage}>{percentage}%</S.RatingText>
    </S.RatingCircle>
  );

  const BackButton = () => (
    <S.BackButtonContainer>
      <Link href="/" passHref>
        <S.BackButton>
          <ChevronIcon /> Voltar
        </S.BackButton>
      </Link>
    </S.BackButtonContainer>
  );

  const MovieImage = ({ src, alt }: { src: string; alt: string }) => (
    <S.PosterContainer>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      ) : (
        <S.EmptyStateImage>
          <span>Sem imagem</span>
        </S.EmptyStateImage>
      )}
    </S.PosterContainer>
  );

  const backdropUrl = movie?.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    : "none";

  const ratingPercentage = useMemo(
    () => getRatingPercentage(movie?.vote_average),
    [movie?.vote_average]
  );
  const trailerKey = useMemo(
    () => getTrailerKey(movie?.videos),
    [movie?.videos]
  );

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Carregando...</div>
    );
  }

  if (error || !movie) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        {error?.message || "Erro ao carregar os detalhes do filme."}
      </div>
    );
  }

  if (isMobile) {
    return (
      <S.MobileLayout>
        <BackButton />
        <S.MobilePosterContainer>
          <MovieImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
                : ""
            }
            alt={movie.title || "Poster do filme"}
          />
        </S.MobilePosterContainer>
        <S.MobileInfoSection>
          <S.MobileTitle>
            {movie.title || "Título não disponível"}
          </S.MobileTitle>
          <S.MobileOriginalTitle>
            Título original: {movie.original_title || "Não disponível"}
          </S.MobileOriginalTitle>
        </S.MobileInfoSection>
        <S.MobileStatsRow>
          <MobileStatCard
            label="Popularidade"
            value={Math.round(movie.popularity || 0).toLocaleString()}
          />

          <MobileStatCard
            label="Votos"
            value={(movie.vote_count || 0).toLocaleString()}
          />

          <S.MobileRatingContainer>
            <Rating percentage={ratingPercentage} />
          </S.MobileRatingContainer>
        </S.MobileStatsRow>
        <S.MobileInfoSection>
          <S.MobileSynopsisText>
            <S.MobileSectionTitle>SINOPSE</S.MobileSectionTitle>
            <p>{movie.overview || "Sinopse não disponível."}</p>
          </S.MobileSynopsisText>
          {movie.genres && movie.genres.length > 0 && (
            <S.MobileGenresContainer>
              <S.MobileGenresList>
                <S.MobileGenresTitle>GÊNEROS</S.MobileGenresTitle>
                <S.MobileGenresContent>
                  {getGenreNames(movie.genres)}
                </S.MobileGenresContent>
              </S.MobileGenresList>
            </S.MobileGenresContainer>
          )}
        </S.MobileInfoSection>
        <S.MobileStatsGrid>
          <MobileStatCard
            label="Lançamento"
            value={formatDate(movie.release_date)}
          />

          <MobileStatCard
            label="Duração"
            value={formatRuntime(movie.runtime)}
          />

          <MobileStatCard
            label="Situação"
            value={translateMovieStatus(movie.status)}
          />

          <MobileStatCard
            label="Idioma"
            value={getLanguageName(movie.original_language)}
          />
          <S.MobileWrapperStats>
            <MobileStatCard
              label="Orçamento"
              value={formatCurrency(movie.budget)}
            />

            <MobileStatCard
              label="Receita"
              value={formatCurrency(movie.revenue)}
            />

            <MobileStatCard
              label="Lucro"
              value={
                movie.revenue !== undefined && movie.budget !== undefined
                  ? formatCurrency(movie.revenue - movie.budget)
                  : "N/A"
              }
            />
          </S.MobileWrapperStats>
        </S.MobileStatsGrid>
        {trailerKey && (
          <S.TrailerSection>
            <S.TrailerTitle>Trailer</S.TrailerTitle>
            <S.TrailerContainer>
              <S.TrailerIframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.TrailerContainer>
          </S.TrailerSection>
        )}
      </S.MobileLayout>
    );
  }

  return (
    <>
      <BackButton />

      <S.MovieHeader>
        <S.MovieDetailsWrapper
          style={
            {
              "--backdrop-image": backdropUrl,
            } as React.CSSProperties
          }
        >
          <S.PosterSection>
            <S.PosterContainer>
              <MovieImage
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
                    : ""
                }
                alt={movie.title || "Poster do filme"}
              />
            </S.PosterContainer>
          </S.PosterSection>

          <S.InfoSection>
            <S.InfoHeader>
              <S.Title>{movie.title || "Título não disponível"}</S.Title>
              {movie.original_title && (
                <S.OriginalTitle>
                  Título original: {movie.original_title}
                </S.OriginalTitle>
              )}
              {movie.tagline && <S.Tagline>{movie.tagline}</S.Tagline>}
            </S.InfoHeader>

            <S.SynopsisSection>
              <S.SynopsisText>
                <S.SectionTitle>SINOPSE</S.SectionTitle>
                <p>{movie.overview || "Sinopse não disponível."}</p>
              </S.SynopsisText>
            </S.SynopsisSection>

            {movie.genres && movie.genres.length > 0 && (
              <S.GenresContainer>
                <S.GenresList>
                  <S.GenresTitle>GÊNEROS</S.GenresTitle>
                  <S.GenresContent>
                    {getGenreNames(movie.genres)}
                  </S.GenresContent>
                </S.GenresList>
              </S.GenresContainer>
            )}
          </S.InfoSection>

          {!isTablet && (
            <S.StatsSection>
              <S.TopStatsRow>
                <StatCard
                  label="Popularidade"
                  value={Math.round(movie.popularity || 0).toLocaleString()}
                />

                <StatCard
                  label="Votos"
                  value={(movie.vote_count || 0).toLocaleString()}
                />

                <Rating percentage={ratingPercentage} />
              </S.TopStatsRow>

              <S.MiddleStatsGrid>
                <StatCard
                  label="Lançamento"
                  value={formatDate(movie.release_date)}
                />

                <StatCard
                  label="Duração"
                  value={formatRuntime(movie.runtime)}
                />

                <StatCard
                  label="Situação"
                  value={translateMovieStatus(movie.status)}
                />

                <StatCard
                  label="Idioma"
                  value={getLanguageName(movie.original_language)}
                />
              </S.MiddleStatsGrid>

              <S.BottomStatsGrid>
                <StatCard
                  label="Orçamento"
                  value={formatCurrency(movie.budget)}
                />

                <StatCard
                  label="Receita"
                  value={formatCurrency(movie.revenue)}
                />

                <StatCard
                  label="Lucro"
                  value={
                    movie.revenue !== undefined && movie.budget !== undefined
                      ? formatCurrency(movie.revenue - movie.budget)
                      : "N/A"
                  }
                />
              </S.BottomStatsGrid>
            </S.StatsSection>
          )}

          {isTablet && (
            <S.TabletStatsSection>
              <S.TabletRatingContainer>
                <Rating percentage={ratingPercentage} />
              </S.TabletRatingContainer>
              <TabletStatCard
                label="Lançamento"
                value={formatDate(movie.release_date)}
              />

              <TabletStatCard
                label="Duração"
                value={formatRuntime(movie.runtime)}
              />

              <TabletStatCard
                label="Situação"
                value={translateMovieStatus(movie.status)}
              />

              <TabletStatCard
                label="Idioma"
                value={getLanguageName(movie.original_language)}
              />

              <TabletStatCard
                label="Popularidade"
                value={Math.round(movie.popularity || 0).toLocaleString()}
              />

              <TabletStatCard
                label="Votos"
                value={(movie.vote_count || 0).toLocaleString()}
              />

              <TabletStatCard
                label="Orçamento"
                value={formatCurrency(movie.budget)}
              />

              <TabletStatCard
                label="Receita"
                value={formatCurrency(movie.revenue)}
              />

              <TabletStatCard
                label="Lucro"
                value={
                  movie.revenue !== undefined && movie.budget !== undefined
                    ? formatCurrency(movie.revenue - movie.budget)
                    : "N/A"
                }
              />
            </S.TabletStatsSection>
          )}
        </S.MovieDetailsWrapper>
      </S.MovieHeader>
      <S.Content>
        <S.ContentWrapper>
          {trailerKey && (
            <S.TrailerSection>
              <S.TrailerTitle>Trailer</S.TrailerTitle>
              <S.TrailerContainer>
                <S.TrailerIframe
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.TrailerContainer>
            </S.TrailerSection>
          )}
        </S.ContentWrapper>
      </S.Content>
    </>
  );
}
