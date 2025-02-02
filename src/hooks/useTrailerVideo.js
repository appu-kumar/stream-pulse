import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  async function getTrailer() {
    const res = await fetch(url, options);
    const movieData = await res.json();
    const trailerwala = movieData?.results?.find(
      (data) => data.type === "Trailer"
    );

    const result = trailerwala ?? movieData?.results[0];  // If there is no trailer then pick first movie 
    dispatch(addTrailer(result));
  }

  useEffect(() => {
    !trailer && getTrailer();
  }, []);
};

export default useTrailerVideo;
