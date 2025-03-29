import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const LogoSVG = styled.svg`
  width: 120px;
  height: 32px;
  color: ${({ theme }) =>
    theme.theme === "dark" ? theme.colors.header.text : theme.colors.mauve12};

  path {
    fill: currentColor;
  }

  rect {
    fill: currentColor;
  }
`;

export const LogoText = styled.span`
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
  font-weight: 700;
  margin-left: 0.5rem;
  color: ${({ theme }) =>
    theme.theme === "dark" ? theme.colors.header.text : theme.colors.mauve12};
`;
