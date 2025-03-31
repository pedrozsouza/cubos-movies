"use client"

import * as S from "./styles"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterContainer>
      {currentYear} © Todos os direitos reservados a{" "}
      <S.BrandName>Cubos Movies</S.BrandName>
    </S.FooterContainer>
  );
}

export default Footer

