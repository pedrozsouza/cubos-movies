export interface Movie {
  id?: number
  title?: string
  original_title?: string
  poster_path?: string
  backdrop_path?: string
  vote_average?: number
  vote_count?: number
  release_date?: string
  overview?: string
  genre_ids?: number[]
  popularity?: number
  adult?: boolean
  original_language?: string
}

export interface MovieDetails extends Movie {
  budget?: number
  genres?: Genre[]
  homepage?: string
  imdb_id?: string
  production_companies?: ProductionCompany[]
  production_countries?: ProductionCountry[]
  revenue?: number
  runtime?: number
  spoken_languages?: SpokenLanguage[]
  status?: string
  tagline?: string
  videos?: {
    results?: Video[]
  }
  credits?: {
    cast?: Cast[]
    crew?: Crew[]
  }
}

export interface Genre {
  id?: number
  name?: string
}

export interface ProductionCompany {
  id?: number
  logo_path?: string
  name?: string
  origin_country?: string
}

export interface ProductionCountry {
  iso_3166_1?: string
  name?: string
}

export interface SpokenLanguage {
  english_name?: string
  iso_639_1?: string
  name?: string
}

export interface Video {
  id?: string
  key?: string
  name?: string
  site?: string
  size?: number
  type?: string
  official?: boolean
  published_at?: string
}

export interface Cast {
  id?: number
  name?: string
  character?: string
  profile_path?: string
  order?: number
}

export interface Crew {
  id?: number
  name?: string
  job?: string
  department?: string
  profile_path?: string
}

export interface MovieResponse {
  page?: number
  results?: Movie[]
  total_pages?: number
  total_results?: number
}

export interface GenresResponse {
  genres?: Genre[]
}
