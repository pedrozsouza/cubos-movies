/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import * as S from "./styles";
import { useMovieDetails } from "@/hooks/useMovies";
import { useMobile } from "@/hooks/useMobile";

export default function MoviePage() {
  const params = useParams();
  const id = params.id;
  const { movie, error, isLoading } = useMovieDetails(id?.toString() || "");
  const { isMobile, isTablet } = useMobile();

  const formatCurrency = (value: number | undefined | null) => {
    if (value === undefined || value === null) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      notation: "compact",
      compactDisplay: "short",
    }).format(value);
  };

  const formatDate = (dateString: string | undefined | null) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("pt-BR");
    } catch {
      return "N/A";
    }
  };

  const formatRuntime = (minutes: number | null | undefined) => {
    if (minutes === undefined || minutes === null) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getGenreNames = (genres: any[] | undefined) => {
    if (!genres || !Array.isArray(genres) || genres.length === 0) {
      return <S.GenreTag key="no-genre">Sem gênero</S.GenreTag>;
    }

    return genres.map((genre) => (
      <S.GenreTag key={genre?.id || `genre-${Math.random()}`}>
        {genre?.name || "Desconhecido"}
      </S.GenreTag>
    ));
  };

  const getRatingPercentage = (rating: number | undefined | null) => {
    if (rating === undefined || rating === null) return 0;
    return Math.round(rating * 10);
  };

  const getTrailerKey = (videos: any | undefined | null) => {
    if (!videos || !videos.results || !Array.isArray(videos.results))
      return null;

    const trailer = videos.results.find(
      (video:any) => video && video.type === "Trailer" && video.site === "YouTube"
    );

    return trailer?.key || null;
  };

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

  const backdropUrl = movie.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    : "none";

  const ratingPercentage = getRatingPercentage(movie.vote_average);
  const trailerKey = getTrailerKey(movie.videos);

  if (isMobile) {
    return (
      <S.MobileLayout>
        <S.MobilePosterContainer>
          {movie.poster_path ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title || "Poster do filme"}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="100vw"
              />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
              }}
            >
              <span>Sem imagem</span>
            </div>
          )}
        </S.MobilePosterContainer>

        <S.MobileStatsRow>
          <S.MobileStatCard>
            <S.InfoLabel>Popularidade</S.InfoLabel>
            <S.InfoValue>
              {Math.round(movie.popularity || 0).toLocaleString()}
            </S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Votos</S.InfoLabel>
            <S.InfoValue>
              {(movie.vote_count || 0).toLocaleString()}
            </S.InfoValue>
          </S.MobileStatCard>
        </S.MobileStatsRow>

        
        <S.MobileRatingWrapper>
          <S.RatingCircle percentage={ratingPercentage}>
            <S.Rating>{ratingPercentage}%</S.Rating>
          </S.RatingCircle>
        </S.MobileRatingWrapper>

        <S.MobileInfoSection>
          <S.MobileTitle>
            {movie.title || "Título não disponível"}
          </S.MobileTitle>
          <S.MobileOriginalTitle>
            Título original: {movie.original_title || "Não disponível"}
          </S.MobileOriginalTitle>

          <S.MobileSynopsisText>
            <S.MobileSectionTitle>SINOPSE</S.MobileSectionTitle>
            <p>{movie.overview || "Sinopse não disponível."}</p>
          </S.MobileSynopsisText>

          <S.MobileGenresContainer>
            <S.MobileGenresList>
              <S.MobileGenresTitle>GÊNEROS</S.MobileGenresTitle>
              <S.MobileGenresContent>
                {getGenreNames(movie.genres)}
              </S.MobileGenresContent>
            </S.MobileGenresList>
          </S.MobileGenresContainer>
        </S.MobileInfoSection>

        <S.MobileStatsGrid>
          <S.MobileStatCard>
            <S.InfoLabel>Orçamento</S.InfoLabel>
            <S.InfoValue>{formatCurrency(movie.budget)}</S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Receita</S.InfoLabel>
            <S.InfoValue>{formatCurrency(movie.revenue)}</S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Lucro</S.InfoLabel>
            <S.InfoValue>
              {movie.revenue !== undefined &&
              movie.budget !== undefined &&
              movie.revenue !== null &&
              movie.budget !== null
                ? formatCurrency(movie.revenue - movie.budget)
                : "N/A"}
            </S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Lançamento</S.InfoLabel>
            <S.InfoValue>{formatDate(movie.release_date)}</S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Duração</S.InfoLabel>
            <S.InfoValue>{formatRuntime(movie.runtime)}</S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Situação</S.InfoLabel>
            <S.InfoValue>{movie.status || "N/A"}</S.InfoValue>
          </S.MobileStatCard>

          <S.MobileStatCard>
            <S.InfoLabel>Idioma</S.InfoLabel>
            <S.InfoValue>
              {movie.original_language === "en"
                ? "Inglês"
                : movie.original_language || "N/A"}
            </S.InfoValue>
          </S.MobileStatCard>
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
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title || "Poster do filme"}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 400px"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#2a2a2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>Sem imagem</span>
                </div>
              )}
            </S.PosterContainer>
          </S.PosterSection>

          <S.InfoSection>
            <S.InfoHeader>
              <S.Title>{movie.title || "Título não disponível"}</S.Title>
              <S.OriginalTitle>
                Título original: {movie.original_title || "Não disponível"}
              </S.OriginalTitle>
              {movie.tagline && <S.Tagline>{movie.tagline}</S.Tagline>}
            </S.InfoHeader>

            <S.SynopsisSection>
              <S.SynopsisText>
                <S.SectionTitle>SINOPSE</S.SectionTitle>
                <p>{movie.overview || "Sinopse não disponível."}</p>
              </S.SynopsisText>
            </S.SynopsisSection>

            <S.GenresContainer>
              <S.GenresList>
                <S.GenresTitle>GÊNEROS</S.GenresTitle>
                <S.GenresContent>{getGenreNames(movie.genres)}</S.GenresContent>
              </S.GenresList>
            </S.GenresContainer>
          </S.InfoSection>

          {!isTablet && (
            <S.StatsSection>
              <S.TopStatsRow>
                <S.StatCard>
                  <S.InfoLabel>Popularidade</S.InfoLabel>
                  <S.InfoValue>
                    {Math.round(movie.popularity || 0).toLocaleString()}
                  </S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Votos</S.InfoLabel>
                  <S.InfoValue>
                    {(movie.vote_count || 0).toLocaleString()}
                  </S.InfoValue>
                </S.StatCard>

                <S.RatingContainer>
                  <S.RatingCircle percentage={ratingPercentage}>
                    <S.Rating>{ratingPercentage}%</S.Rating>
                  </S.RatingCircle>
                </S.RatingContainer>
              </S.TopStatsRow>

              <S.MiddleStatsGrid>
                <S.StatCard>
                  <S.InfoLabel>Lançamento</S.InfoLabel>
                  <S.InfoValue>{formatDate(movie.release_date)}</S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Duração</S.InfoLabel>
                  <S.InfoValue>{formatRuntime(movie.runtime)}</S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Situação</S.InfoLabel>
                  <S.InfoValue>{movie.status || "N/A"}</S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Idioma</S.InfoLabel>
                  <S.InfoValue>
                    {movie.original_language === "en"
                      ? "Inglês"
                      : movie.original_language || "N/A"}
                  </S.InfoValue>
                </S.StatCard>
              </S.MiddleStatsGrid>

              <S.BottomStatsGrid>
                <S.StatCard>
                  <S.InfoLabel>Orçamento</S.InfoLabel>
                  <S.InfoValue>{formatCurrency(movie.budget)}</S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Receita</S.InfoLabel>
                  <S.InfoValue>{formatCurrency(movie.revenue)}</S.InfoValue>
                </S.StatCard>

                <S.StatCard>
                  <S.InfoLabel>Lucro</S.InfoLabel>
                  <S.InfoValue>
                    {movie.revenue !== undefined &&
                    movie.budget !== undefined &&
                    movie.revenue !== null &&
                    movie.budget !== null
                      ? formatCurrency(movie.revenue - movie.budget)
                      : "N/A"}
                  </S.InfoValue>
                </S.StatCard>
              </S.BottomStatsGrid>
            </S.StatsSection>
          )}

          {isTablet && (
            <S.TabletStatsSection>
              <S.TabletStatCard>
                <S.InfoLabel>Lançamento</S.InfoLabel>
                <S.InfoValue>{formatDate(movie.release_date)}</S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Duração</S.InfoLabel>
                <S.InfoValue>{formatRuntime(movie.runtime)}</S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Situação</S.InfoLabel>
                <S.InfoValue>{movie.status || "N/A"}</S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Idioma</S.InfoLabel>
                <S.InfoValue>
                  {movie.original_language === "en"
                    ? "Inglês"
                    : movie.original_language || "N/A"}
                </S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Popularidade</S.InfoLabel>
                <S.InfoValue>
                  {Math.round(movie.popularity || 0).toLocaleString()}
                </S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Votos</S.InfoLabel>
                <S.InfoValue>
                  {(movie.vote_count || 0).toLocaleString()}
                </S.InfoValue>
              </S.TabletStatCard>

              <S.TabletRatingContainer>
                <S.RatingCircle percentage={ratingPercentage}>
                  <S.Rating>{ratingPercentage}%</S.Rating>
                </S.RatingCircle>
              </S.TabletRatingContainer>

              <S.TabletStatCard>
                <S.InfoLabel>Orçamento</S.InfoLabel>
                <S.InfoValue>{formatCurrency(movie.budget)}</S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Receita</S.InfoLabel>
                <S.InfoValue>{formatCurrency(movie.revenue)}</S.InfoValue>
              </S.TabletStatCard>

              <S.TabletStatCard>
                <S.InfoLabel>Lucro</S.InfoLabel>
                <S.InfoValue>
                  {movie.revenue !== undefined && movie.budget !== undefined
                    ? formatCurrency(movie.revenue - movie.budget)
                    : "N/A"}
                </S.InfoValue>
              </S.TabletStatCard>
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
