/* eslint-disable @typescript-eslint/no-explicit-any */
export function translateMovieStatus(
  status: string | null | undefined
): string {
  if (!status) return "Desconhecido";

  const statusMap: Record<string, string> = {
    Released: "Lançado",
    "Post Production": "Pós-produção",
    "In Production": "Em produção",
    Planned: "Planejado",
    Canceled: "Cancelado",
    Rumored: "Rumor",
    Completed: "Concluído",
    Announced: "Anunciado",
  };

  return statusMap[status] || status;
}

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getLanguageName(isoCode: string | null | undefined): string {
  if (!isoCode) return "Desconhecido";

  try {
    const languageNames = new Intl.DisplayNames(["pt-BR"], {
      type: "language",
    });
    const languageName = languageNames.of(isoCode) || "Desconhecido";

    return capitalizeFirstLetter(languageName);
  } catch {
    const commonLanguages: Record<string, string> = {
      en: "Inglês",
      fr: "Francês",
      es: "Espanhol",
      de: "Alemão",
      it: "Italiano",
      pt: "Português",
      ja: "Japonês",
      zh: "Chinês",
      ru: "Russo",
    };

    const fallbackName =
      commonLanguages[isoCode.toLowerCase()] || isoCode.toUpperCase();
    return capitalizeFirstLetter(fallbackName);
  }
}

export const getRatingPercentage = (rating: number | undefined | null) => {
  if (rating === undefined || rating === null) return 0;
  return Math.round(rating * 10);
};

export const getTrailerKey = (videos: any | undefined | null) => {
  if (!videos || !videos.results || !Array.isArray(videos.results)) return null;

  const trailer = videos.results.find(
    (video: any) =>
      video && video.type === "Trailer" && video.site === "YouTube"
  );

  return trailer?.key || null;
};
