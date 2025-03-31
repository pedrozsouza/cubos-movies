import styled from "styled-components";
import { purple } from "@radix-ui/colors";

export const MovieHeader = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem;
  min-height: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
`;

export const MovieDetailsWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: minmax(21.875rem, 25rem) 1fr 21.875rem;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.9) 70%,
        rgba(0, 0, 0, 1) 100%
      ),
      var(--backdrop-image);
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  @media (max-width: 1400px), (max-width: 1200px) {
    grid-template-columns: minmax(18.75rem, 22rem) 1fr 18.75rem;
    gap: 1.5rem;
    padding-right: 1rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: minmax(13.75rem, 18rem) 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    background-color: #121214;

    &::before {
      display: none;
    }
  }
`;

export const PosterSection = styled.div`
  grid-column: 1;
  align-self: start;
  width: 100%;
  max-width: 25rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media (max-width: 1400px), (max-width: 1200px) {
    padding-bottom: 1.5rem;
  }
`;
export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #fdfcfd;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

export const OriginalTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const Tagline = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0.063rem 0.125rem rgba(0, 0, 0, 0.5);

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #b5b2bc;
`;

export const SynopsisSection = styled.div`
  margin-top: 1rem;
`;

export const SynopsisText = styled.div`
  background-color: rgba(35, 34, 37, 0.75);
  padding: 0.1rem 1rem 0.5rem 1rem;
  border-radius: 0.25rem;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #eeeef0;
  }

  @media (max-width: 992px) {
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    background-color: rgba(30, 30, 35, 0.7);

    p {
      font-size: 0.85rem;
    }
  }
`;

export const GenresContainer = styled.div`
  margin-top: 1rem;
`;

export const GenresList = styled.div`
  background-color: rgba(35, 34, 37, 0.75);
  padding: 0.1rem 1rem 0.5rem 1rem;
  border-radius: 0.25rem;
  width: fit-content;

  @media (max-width: 768px) {
    background-color: rgba(30, 30, 35, 0.7);
    padding: 0.75rem;
  }
`;

export const GenresTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #b5b2bc;
  text-transform: uppercase;
  text-shadow: 0 0.063rem 0.125rem rgba(0, 0, 0, 0.5);
`;

export const GenresContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

export const GenreTag = styled.span`
  padding: 0.5rem 1.25rem;
  background-color: ${purple.purple12};
  color: #fdfcfd;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0.25rem;
  letter-spacing: 0.031rem;
  white-space: nowrap;

  @media (max-width: 992px) {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.7rem;
  }
`;

export const StatsSection = styled.div`
  grid-column: 3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  align-self: start;
  padding: 2rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TopStatsRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr auto;
  gap: 0.5rem;
  padding-left: 1rem;
`;

export const MiddleStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const BottomStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: rgba(35, 34, 37, 0.75);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  border-radius: 0.25rem;
  height: 3.75rem;

  @media (max-width: 1200px) {
    height: auto;
    min-height: 3.75rem;
  }
`;

export const RatingCircle = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const RatingProgress = styled.div<{ $percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme, $percentage }) => {
    let color = theme.colors.tomato9;
    if ($percentage > 33 && $percentage <= 66) color = theme.colors.amber9;
    if ($percentage > 66) color = theme.colors.grass9;

    return `conic-gradient(
      ${color} ${$percentage}%,
      transparent ${$percentage}%
    )`;
  }};
  mask: radial-gradient(transparent 65%, black 66%);
  -webkit-mask: radial-gradient(transparent 65%, black 66%);
  transition: background 0.3s ease;
`;

export const RatingText = styled.div<{ $percentage?: number }>`
  position: relative;
  z-index: 3;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme, $percentage = 0 }) => {
    if ($percentage > 66) return theme.colors.grass9;
    if ($percentage > 33) return theme.colors.amber9;
    return theme.colors.tomato9;
  }};
  text-align: center;
`;

export const InfoLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #b5b2bc;
  margin-bottom: 0.25rem;
  letter-spacing: 0.031rem;
  @media (max-width: 768px) {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const InfoValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #eeeef0;

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const TrailerSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const TrailerTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TrailerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #000;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    border-radius: 0.25rem;
  }
`;

export const TrailerIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const TabletStatsSection = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
`;

export const TabletStatCard = styled.div`
  background-color: rgba(35, 34, 37, 0.75);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  border-radius: 0.25rem;
  height: auto;
  min-height: 3.75rem;
`;

export const TabletRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0;
  border-radius: 0;
`;

export const EmptyStateImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PosterImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mauve1};
`;

export const MobilePosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const MobileStatsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  padding: 0 1rem;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.5rem;
`;

export const MobileRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  position: relative;
  z-index: 2;
`;

export const MobileStatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.mauve3};
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  border-radius: 0.25rem;
  width: 100%;
  margin-right: 0;
`;

export const MobileWrapperStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  width: 100%;
`;

export const MobileRatingContainer = styled.div`
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-left: auto;
`;

export const MobileInfoSection = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const MobileTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  padding-top: 0.5rem;
`;

export const MobileOriginalTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const MobileSectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  padding: 0.75rem 1rem 0 0;
`;

export const MobileSynopsisText = styled.div`
  background-color: ${({ theme }) => theme.colors.mauve3};
  padding: 0 1rem 1rem;
  border-radius: 0.25rem;

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.85rem;
  }
`;

export const MobileGenresContainer = styled.div`
  margin-top: 1rem;
`;

export const MobileGenresList = styled.div`
  background-color: ${({ theme }) => theme.colors.mauve3};
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const MobileGenresTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
`;

export const MobileGenresContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

export const MobileStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
  background-color: transparent;

  & > :last-child {
    grid-column: 1 / -1;
  }
`;

export const BackButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.purple9};
  color: white;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  width: fit-content;

  svg {
    rotate: 270deg;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple10};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
`;

export const BackButtonContainer = styled.div`
  position: relative;
  padding: 2rem 0 0 2rem;
  z-index: 10;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 1rem 1rem 0 1rem;
  }
`;
