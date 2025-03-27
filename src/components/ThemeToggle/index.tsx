"use client";

import * as S from "./styles";
import { useTheme } from "@/context/ThemeContext";
import MonIcon from "@/ui/icons/Mon";
import SunIcon from "@/ui/icons/Sun";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.ToggleButton
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${theme === "dark" ? "claro" : "escuro"}`}
    >
      {theme === "dark" ? <SunIcon /> : <MonIcon />}
    </S.ToggleButton>
  );
}
