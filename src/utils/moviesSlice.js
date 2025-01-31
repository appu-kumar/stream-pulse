import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer:null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer:(state,action) => {
      state.trailer=action.payload;
    }
  },
});

export const { addMovies,addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
