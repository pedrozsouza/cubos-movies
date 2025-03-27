import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 32px;
`;

export const LogoSVG = styled.svg`
  width: 120px;
  height: 32px;
  color: ${({ theme }) => theme.colors.header.text};

  path {
    fill: currentColor;
  }

  rect {
    fill: currentColor;
  }
`;

export const LogoText = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 0.1rem 0.75rem;
  color: ${({ theme }) => theme.colors.header.text};
`;
