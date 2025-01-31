import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
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
  },
});

export const {
  addLatestMovies,
  addTrailer,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingsMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
