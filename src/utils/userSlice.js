/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


 const userSlice = createSlice({
     name:'user',
     initialState:null,
     reducers:{
        // no need to return the state
        // This is combination of the action and reducer
        addUser:(state, action)=> {
            return action.payload;   // now intialstate will hold current user ok
        },
        removeUser:(state,action) => {
            return null;
        }
     }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;