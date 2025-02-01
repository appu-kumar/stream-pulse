import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
     name:"lang",
     initialState:{
        language:'en'
     },
     reducers:{
        addLanguage:(state,actions) => {
            state.language=actions.payload;
        }
     }
})

export const {addLanguage} = langSlice.actions;
export default langSlice.reducer;