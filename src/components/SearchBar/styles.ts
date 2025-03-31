import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 37.5rem;
  margin: 0 auto;
  position: relative;
`;

export const SearchContent = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

export const InputContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.borderFocus};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.purple4};
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.mauve12};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple6};
    transform: scale(1.05);
  }
`;
