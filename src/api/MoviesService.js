import axios from "axios";

const API_KEY = "cc8bbb89eed314f28a83494add5ad5b6";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}