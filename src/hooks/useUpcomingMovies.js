import { useEffect } from "react";
import { addUpcomingsMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";

const useUpcomingMovies = () =>{
    const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies)
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const dispatch = useDispatch();
  
    async function getAllUpcomingMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addUpcomingsMovies(movies));
    }
  
    useEffect(() => {
      !upcomingMovies && getAllUpcomingMovies();
    }, []);
}


export default useUpcomingMovies;