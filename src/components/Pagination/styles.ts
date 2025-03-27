import styled from "styled-components"

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

export const PageButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 0.25rem;
  border-radius: 4px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.card)};
  color: ${({ isActive, theme }) => (isActive ? "white" : theme.colors.text.primary)};
  border: 1px solid ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.border)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primaryHover : theme.colors.cardHover)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

