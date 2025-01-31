import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  async function getTrailer() {
    const res = await fetch(url, options);
    const movieData = await res.json();
    const trailerwala = movieData.results.find(
      (data) => data.type === "Trailer"
    );
    dispatch(addTrailer(trailerwala));
  }

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useTrailerVideo;
