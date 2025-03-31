import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjVhNmRlYjMyODU1ZjA4YjBmY2E1ODJkNDRjMTg5YSIsIm5iZiI6MTc0MzAxODA3NC44ODksInN1YiI6IjY3ZTQ1ODVhYjhmYzM5ODk5NjEwODYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6vbJBRNC1ag3k6XZhaGoC2XNL0G9ZCej-sl69NlqKAY";
const API_KEY = "2f5a6deb32855f08b0fca582d44c189a";
const API_LANGUAGE = "pt-BR";
const API_REGION = "BR";

export const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: API_LANGUAGE,
    region: API_REGION,
  },
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});
