import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 0.875rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 2rem;
`

