import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
    searchedMovie:''
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addSearchedMovie: (state,action) => {
        state.searchedMovie = action.payload;
      },
  },
});

export const { toggleGptSearch,addSearchedMovie} = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer;
