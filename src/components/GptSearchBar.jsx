import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langConfig } from "../utils/configConstants";
// import client from "../utils/openai";
import { GEMINI_KEY } from "../utils/constants";
import { addGptSearchedMovies } from "../utils/moviesSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.lang.language);
  const inputRef = useRef(null);

  const handleOnClick = async () => {
    const query = `Provide an array of movie titles related to the search query: "${inputRef.current.value}". 
    Return only a JavaScript array in this format: ["Movie1", "Movie2", "Movie3", ...]. 
    Do not include explanations, extra text, or JSON notation. Just return the array directly.`;
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" +
          GEMINI_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
          }),
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        const result = data.candidates[0].content.parts[0].text;
        // alert("Top 5 Comedy Movies:\n" + generatedText);
        dispatch(addGptSearchedMovies(JSON.parse(result)));
      } else {
        console.error("No valid response from API.");
        alert("Failed to retrieve movie list. Try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="relative z-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 w-1/2 m-auto"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={langConfig[lang].title}
          className="p-4 border border-black col-span-9 rounded-lg bg-black text-white mx-2"
        />
        <button
          className="p-4  border border-black col-span-3 bg-red-600 text-white rounded-lg cursor-pointer"
          onClick={handleOnClick}
        >
          {langConfig[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
