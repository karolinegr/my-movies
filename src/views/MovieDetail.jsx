import { useParams } from "react-router-dom";
import { MoviesContainer } from "../styles/MoviesContainer";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export default function MovieDetail() {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovieById = async () => {
    const { data } = await MoviesService.getMovieById(id);
    setMovie(data);
  };

  useEffect(() => {
    getMovieById();
  }, []);

  return (
    <MoviesContainer>
      <h2>{movie.title}</h2>
      <article>{movie.overview}</article>
    </MoviesContainer>
  );
}
