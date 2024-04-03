import { MovieItem } from "./MovieItem";

export default function MoviesList({ movies }) {
  return (
    <section>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
}
