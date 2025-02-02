import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";

const usePopularMovies = () =>{
    const popularMoives = useSelector((store)=> store.movies.popularMovies);
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const dispatch = useDispatch();
  
    async function getAllPopularMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addPopularMovies(movies));
    }
  
    useEffect(() => {
      !popularMoives && getAllPopularMovies();
    }, []);
}

export default usePopularMovies;