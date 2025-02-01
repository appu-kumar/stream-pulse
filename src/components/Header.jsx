import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/GPTSearchSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { addLanguage } from "../utils/langSlice";

// Header is called in every path that is why onAuthStateChanged write here.
const Header = () => {
  const user = useSelector((store) => store.user);
  const toggleSearch = useSelector((store) => store.GptSearch.toggleSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-screen top-0 left-0 z-10 bg-gradient-to-t to-black flex items-center justify-between">
        <img className="w-44 ml-5" src={LOGO} alt="logo-img" />
        {user && (
          <div className="flex items-center">
            {toggleSearch && (
              <select
                className="text-white mr-10 p-2 bg-black"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="text-white bg-purple-500 mr-4 p-2 rounded-lg cursor-pointer "
              onClick={handleGptSearch}
            >
              {toggleSearch ? "Home" : "GPTsearch"}
            </button>
            <img
              src={user.photoURL}
              alt="user-image"
              className="w-16 h-16 rounded-3xl mr-2"
            />
            <p
              className="text-4xl mr-5 text-white cursor-pointer"
              onClick={handleSignOut}
            >
              sign-out
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
