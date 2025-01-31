import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useLatestMovies(); // This will call an API and put all data in store of movies. ok
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
