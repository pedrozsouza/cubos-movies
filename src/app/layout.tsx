import { GenresProvider } from "@/context/GenresContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyle } from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GenresProvider>
              <GlobalStyle />
              {children}
            </GenresProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
