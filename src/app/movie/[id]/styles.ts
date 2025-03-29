import { purple } from "@radix-ui/colors";
import styled from "styled-components";

export const MovieHeader = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    min-height: 31.25rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MovieDetailsWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: minmax(21.875rem, 25rem) 1fr 21.875rem;
  gap: 2rem;
  position: relative;
  padding: 2rem ;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.95) 0%,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      var(--backdrop-image);
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  @media (max-width: 1400px) {
    grid-template-columns: minmax(18.75rem, 22rem) 1fr 18.75rem;
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: minmax(15.625rem, 20rem) 1fr 15.625rem;
    gap: 1.5rem;
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
    width: 100%;
    max-width: 100%;
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.563rem -0.313rem rgba(0, 0, 0, 0.5),
    0 0.5rem 0.625rem -0.375rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  border: 0.125rem solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    border: none;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
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
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0.063rem 0.125rem rgba(0, 0, 0, 0.5);

  @media (max-width: 992px) {
    font-size: 1rem;
    margin-bottom: 1rem;
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
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
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
    color: #EEEEF0;
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
  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
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
  padding-top: 0.5rem;
  align-self: start;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TopStatsRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr auto;
  gap: 0.5rem;
  padding-right: 1rem;
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

export const StatCard = styled.div<{ darker?: boolean }>`
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

export const RatingContainer = styled.div`
  position: relative;
  width: 4.375rem;
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  @media (max-width: 1200px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const RatingCircle = styled.div<{ percentage: number }>`
  position: relative;
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.188rem solid #333;
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.188rem solid #f9ca24;
    box-sizing: border-box;
    clip-path: ${({ percentage }) => {
      const angle = (percentage / 100) * 360;
      const angleInRadians = (angle - 90) * (Math.PI / 180);
      const x = 50 + 50 * Math.cos(angleInRadians);
      const y = 50 + 50 * Math.sin(angleInRadians);

      if (percentage <= 50) {
        return `polygon(50% 0, 50% 50%, ${x}% ${y}%)`;
      }
      return `polygon(50% 0, 50% 50%, 100% 50%, ${x}% ${y}%)`;
    }};
    transform: rotate(-90deg);
  }

  @media (max-width: 1200px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const Rating = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f9ca24;
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
`;

export const InfoLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
  letter-spacing: 0.031rem;
`;

export const InfoValue = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #fdfcfd;

  @media (max-width: 1200px) {
    font-size: 1rem;
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
  padding: 2rem;
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
  padding: 0 1rem;
`;

export const TabletStatCard = styled.div<{ darker?: boolean }>`
  background-color: ${(props) =>
    props.darker ? "rgba(30, 30, 35, 0.7)" : "rgba(50, 50, 55, 0.7)"};
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
  grid-column: span 2;
`;

export const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? theme.colors.mauve1 : theme.colors.mauve3};
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
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? theme.colors.mauve2 : theme.colors.mauve4};
  gap: 0.5rem;
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
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "rgba(30, 30, 35, 0.7)" : theme.colors.mauve5};
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

export const MobileRatingContainer = styled.div`
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const MobileInfoSection = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "transparent" : theme.colors.mauve2};
`;

export const MobileTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
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
  padding: 0.75rem 1rem 0;
`;

export const MobileSynopsisText = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "rgba(30, 30, 35, 0.7)" : theme.colors.mauve3};
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
  margin-bottom: 1rem;
`;

export const MobileGenresList = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "rgba(30, 30, 35, 0.7)" : theme.colors.mauve3};
  padding: 0.75rem;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0 1rem 1rem;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "transparent" : theme.colors.mauve2};

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
