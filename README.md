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
- Impl redux, sign-up, sign-in, sign-out 
- Fixbug: sign-out and sign-in 
- Fixbug: Put the onAuthStateChanged in Header.js  If user is logged in and trying to go to login page it will redirect to browse page vice-versa
- Create constants.js file to put all the static data.
- TMDB (To get all the movies data)
- Login in TMDB and get api access token 
- Go to API references and get API don't miss to put token in constant file ok
- Custom Hook for Now Playing movies
- create movieSlice
- update stoe with movies data
- plaining for maincontainer and secondary container
- Fetch Data for Trailer video
- Fetch Popular,latest,upcoming,top rated movies
- Add GPT button in Header.jsx
- Create the GPT component to show movies
- GPT search Bar
- Make GPT search Bar in multi language
- Attach the Google Gemni to Search movie
- Call The APIs based on searched movie



# Deploying steps

- sudo npm install -g firebase-tools
- firebase login
- firebase init
- Build before deploying
- firebase deploy

# Redux (npm install @reduxjs/toolkit react-redux)

- 1. Create store eg. appStore.js, This store manages the state globally.
- 2. Create Slice for a particular entity. eg. userSlice() this manages only user state okay. This create Two things automatically
- 3. Connect the userSlice with react app
- 4. Dispatch action  eg. dispatch(addUser(user))
- 5. Subscribe to store eg. useSelector((state)=>state)
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


