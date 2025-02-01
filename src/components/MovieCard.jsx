/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return; // early return
  return (
    <div className="w-48">
      <img src={`${IMG_URL}${poster_path}`} alt="movie Card" />
    </div>
  );
};

export default MovieCard;
