import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useLatestMovies(); // This will call an API and put all data in store of movies. ok

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
           main container
           secondary conatienr
      */}
    </>
  );
};

export default Browse;
