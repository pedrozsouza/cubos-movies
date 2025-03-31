import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 0.875rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 2rem;
`

export const BrandName = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 700;

  &:hover {
    opacity: 0.8;
    cursor: default;
  }
`;

