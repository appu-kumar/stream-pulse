import { useEffect } from "react";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const useTopRatedMovies = () =>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const dispatch = useDispatch();
  
    async function getAllTopRatedMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addTopratedMovies(movies));
    }
  
    useEffect(() => {
      getAllTopRatedMovies();
    }, []);
}


export default useTopRatedMovies;