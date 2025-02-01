import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addGptListMoviesByName } from "../utils/moviesSlice";
const MoviesSuggestionGpt = () => {
  const dispatch = useDispatch();
  const searchedMovie = useSelector((store) => store?.movies?.gptSearchedMovie);
  const listOfMoviesByName = useSelector(
    (store) => store?.movies?.gptListMoviesByName
  );

  const movieListByName = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (!searchedMovie || searchedMovie.length === 0) return;

    const fetchMovies = async () => {
      try {
        const result = await Promise.all(
          searchedMovie?.map((movieName) => movieListByName(movieName))
        );
        dispatch(addGptListMoviesByName(result));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovies();
  }, [searchedMovie]);

  return (
    <>
      <div className="relative z-10 text-white">
        {listOfMoviesByName &&
          listOfMoviesByName.map((movieList) => (
            <MovieList
              key={movieList?.results?.[0].id}
              title={movieList?.results?.[0].title}
              movies={movieList?.results}
            />
          ))}
      </div>
    </>
  );
};

export default MoviesSuggestionGpt;
