import { useEffect } from "react";
import { addMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const useLatestMovies = () =>{
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const dispatch = useDispatch();
  
    async function getAllLatestMovies() {
      const res = await fetch(url, options)
      const movies = await res.json();
      dispatch(addMovies(movies));
    }
  
    useEffect(() => {
      getAllLatestMovies();
    }, []);
}

export default useLatestMovies;