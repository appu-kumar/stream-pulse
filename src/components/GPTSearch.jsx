import GptSearchBar from "./GptSearchBar";
import MoviesSuggestionGpt from "./MoviesSuggestionGpt";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="mt-[10%]">
      <div className="fixed top-0">
        <img className="" src={BG_URL} alt="background-img" />
      </div>
      <GptSearchBar />
      <MoviesSuggestionGpt />
    </div>
  );
};

export default GPTSearch;
