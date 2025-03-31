import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
`;

export const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #fdfcfd;
  margin-bottom: 0.25rem;
  text-align: left;
  text-transform: uppercase;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  font-family: Montserrat, sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.6em;
  max-width: 90%;
`;

export const GenreText = styled.p<{ $isVisible: boolean }>`
  font-size: 0.75rem;
  color: #b4b4b4;
  text-align: left;
  font-family: Montserrat, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  max-height: ${({ $isVisible }) => ($isVisible ? "2rem" : "0")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const RatingContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const RatingCircle = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
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

export const EmptyStateImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

