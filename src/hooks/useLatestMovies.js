import { useEffect } from "react";
import { addLatestMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";

const useLatestMovies = () =>{
    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMoviesl)
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const dispatch = useDispatch();
  
    async function getAllLatestMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addLatestMovies(movies));
    }
  
    useEffect(() => {
      !nowPlayingMovies && getAllLatestMovies();      // memoization if movielist is present in the store then why are u calling the api okay
    }, []);
}

export default useLatestMovies;