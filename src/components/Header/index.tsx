"use client"

import Link from "next/link"
import * as S from "./styles"
import SunIcon from "@/ui/icons/Sun"
import MonIcon from "@/ui/icons/Mon"
import Logo from "../Logo"
import { useTheme } from "@/context/ThemeContext"

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <S.HeaderContainer>
      <Link href="/" passHref>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
      </Link>
      <S.ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
        {theme === "dark" ? (
          <SunIcon color="#eeeef0" />
        ) : (
          <MonIcon color="#eeeef0" />
        )}
      </S.ThemeToggle>
    </S.HeaderContainer>
  );
}

export default Header

