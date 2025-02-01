import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const toggledSearch = useSelector(
    (store) => store.GptSearch.toggleSearch
  );
  useLatestMovies(); // This will call an API and put all data in store of movies. ok
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      {toggledSearch ? (
        <>
          <Header />
          <GPTSearch />
        </>
      ) : (
        <>
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
