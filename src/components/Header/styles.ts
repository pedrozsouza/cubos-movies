import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${({ theme }) => theme.colors.mauve6};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.colors.purple8};
  border: none;
  color: #fdfcfd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple9};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
