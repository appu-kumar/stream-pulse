import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    gptSearchedMovie:null,
    gptListMoviesByName:null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingsMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addGptSearchedMovies:(state,action) => {
      state.gptSearchedMovie=action.payload;
    },
    removeGptSearchedMovies:(state) => {
      state.gptSearchedMovie=null;
    },
    addGptListMoviesByName:(state,action) => {
      state.gptListMoviesByName = action.payload;
    },
    removeGptListMoviesByName:(state) => {
      state.gptListMoviesByName = null;
    }
  },
});

export const {
  addLatestMovies,
  addTrailer,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingsMovies,
  addGptSearchedMovies,
  addGptListMoviesByName,
  removeGptListMoviesByName,
  removeGptSearchedMovies
} = movieSlice.actions;
export default movieSlice.reducer;
