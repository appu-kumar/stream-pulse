import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return; // early return

  return (
    <div>
      <VideoTitle
        overview={movies.results[0].overview}
        title={movies.results[0].title}
      />
      <VideoBackground movieId={movies.results[0].id} />
    </div>
  );
};

export default MainContainer;
