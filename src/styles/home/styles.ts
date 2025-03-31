import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: min(
    90%,
    1400px
  );
  margin: 0 auto;
  padding: 2rem 0;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 1.5rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    theme.theme === "dark"
      ? "rgba(30, 30, 35, 0.2)"
      : "rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
