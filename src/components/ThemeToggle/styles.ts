import styled from "styled-components";

export const ToggleButton = styled.button`
  background: var(--mauve-4);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--mauve-12);
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: var(--mauve-5);
    color: var(--purple-11);
  }

  &:focus-visible {
    outline: 2px solid var(--purple-7);
    outline-offset: 2px;
  }

  [data-theme="light"] & {
    background: var(--mauve-11);
    color: var(--mauve-1);

    &:hover {
      background: var(--mauve-10);
      color: var(--purple-11);
    }
  }
`;
