"use client"

import * as S from "./styles"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return <S.FooterContainer>{currentYear} © Todos os direitos reservados a Cubos Movies</S.FooterContainer>
}

export default Footer

