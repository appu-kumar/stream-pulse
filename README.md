# React + Vite

- npm create vite@latest

# Configured Tailwindcss

- Visit to tainwind website

# Features

- Header
- Login/Sing-in-page
- Sign-up(within sign-in)
- Routing(little bit)
- Form validation
- Firebase setting
- Deployment
- Login/Signup validation
- Configured react-redux and redux-toolkit

# Deploying steps

- sudo npm install -g firebase-tools
- firebase login
- firebase init
- Build before deploying
- firebase deploy

# Redux (npm install @reduxjs/toolkit react-redux)

- 1. Create store eg. appStore.js, This store manages the state globally.
- 2. Create Slice for a particular entity. eg. userSlice() this manages only user state okay. This create Two things automatically
  - Without createSlice() we were creating actions and reducer separatally but now createSlice() generate both automatically.
  - 1. actions --> An action in Redux is a plain JavaScript object with a type field that describes what event occurred. It may also include a payload containing the necessary data.
  - const addUser = (user) => {
    return {
    type: 'ADD_USER',
    payload: user
    };
    };
  - Output:- {
    "type": "ADD_USER",
    "payload": { "name": "Sneha", "age": 25 }
    }
  - Redux Toolkit (createSlice) simplifies this process by automatically generating action creators inside the reducers field.

  - 2. Reducers in Redux
  - A reducer is a pure function that:
  - Takes the current state and an action.
    Returns the new state based on the action type.
  - Takes the current state and an action.
    Returns the new state based on the action type.
  - const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.payload;
        case 'REMOVE_USER':
            return null;
        default:
            return state;
    }
};


- How createSlice Simplifies Actions & Reducers
- const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            return action.payload;  
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

- Redux Toolkit automatically:
- Creates actions (addUser, removeUser).
- Creates reducers that handle those actions.

- export const { addUser, removeUser } = userSlice.actions;
- export default userSlice.reducer;


