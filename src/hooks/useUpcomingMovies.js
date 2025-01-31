import { useEffect } from "react";
import { addUpcomingsMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const useUpcomingMovies = () =>{
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const dispatch = useDispatch();
  
    async function getAllUpcomingMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addUpcomingsMovies(movies));
    }
  
    useEffect(() => {
      getAllUpcomingMovies();
    }, []);
}


export default useUpcomingMovies;