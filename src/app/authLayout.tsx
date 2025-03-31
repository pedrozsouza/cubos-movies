"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Image from "next/image";
import * as S from "../styles/authLayout/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTheme } from "@/context/ThemeContext";
import { lightTheme, darkTheme } from "@/styles/theme";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  if (!theme) return null;

  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <S.Container>
        <S.BackgroundImage>
          <Image
            src="/background.png"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </S.BackgroundImage>
        <Header />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.Container>
    </StyledThemeProvider>
  );
}
