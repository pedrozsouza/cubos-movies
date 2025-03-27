export interface Movie {
    id?: number;
    title?: string;
    poster_path?: string | null;
    vote_average?: number;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    adult?: boolean;
    backdrop_path?: string;
    original_language?: string;
    original_title?: string;
    popularity?: number;
    video?: boolean;
    vote_count?: number;
}

export interface MovieDetails extends Movie {
    budget: number;
    revenue: number;
    runtime: number;
    genres: {
        id: number;
        name: string;
    }[];
    production_companies: {
        id: number;
        name: string;
    }[];
}
