/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="p-3">
      <h1 className="text-3xl mb-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex items-center gap-2">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
