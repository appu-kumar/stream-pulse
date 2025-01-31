import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

// Header is called in every path that is why onAuthStateChanged write here.
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, displayName, email, photoURL } = user;
          dispatch(addUser({uid,displayName,email,photoURL}));
          navigate('/browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () => unsubscribe();
    }, [dispatch]);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  
  return (
    <>
      <div className="absolute w-screen top-0 left-0 z-10 bg-gradient-to-t to-black flex items-center justify-between">
        <img
          className="w-44 ml-5"
          src={LOGO}
          alt="logo-img"
        />
       { user && <div className="flex items-center">
          <img src={user.photoURL} alt="user-image" className="w-16 h-16 rounded-3xl mr-2"/>
          <p className="text-4xl mr-5 text-white cursor-pointer" onClick={handleSignOut}>sign-out</p>
        </div>}
      </div>
    </>
  );
};

export default Header;
