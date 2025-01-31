import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const usePopularMovies = () =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const dispatch = useDispatch();
  
    async function getAllPopularMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addPopularMovies(movies));
    }
  
    useEffect(() => {
      getAllPopularMovies();
    }, []);
}

export default usePopularMovies;