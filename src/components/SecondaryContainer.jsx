import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <div className="-mt-50 pl-12 relative z-20">
        <MovieList
          title="Now Playing"
          movies={movies?.nowPlayingMovies?.results}
        />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies?.results} />
        <MovieList title="Popular" movies={movies?.popularMovies?.results} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies?.results} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
