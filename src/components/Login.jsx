/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";

const LoginAndSignup = () => {
  const [toggleSignInForm, setToggleSignInForm] = useState(false);
  const [error, setError] = useState("");
  const [valid, setValid] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleOnClick() {
    setToggleSignInForm(!toggleSignInForm);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const result = validateForm(email, password);
    const fullName = toggleSignInForm && fullNameRef.current.value;

    console.log('name',fullName)

    setValid(result);

    if (toggleSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up we can store the user info in redux state or context api
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName, photoURL: "https://avatars.githubusercontent.com/u/83134946?s=40&v=4"
          }).then(() => {
            // Profile updated!
            console.log('usr',user);
            const {uid,displayName,photoURL,email} = user;
            dispatch(addUser({uid,displayName,photoURL,email}));  // storing in store
            navigate("/browse")
            // ..
          }).catch((error) => {
            // An error occurred
             setError(error);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const {uid,displayName,photoURL,email} = userCredential.user;
          dispatch(addUser({uid,displayName,photoURL,email}));  // storing in store
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div className="">
      <Header />
      <div>
        <img
          className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-4/12 my-36 p-10 absolute right-0 left-0 top-28 bg-[rgba(0,0,0,0.8)] text-white mx-auto rounded-lg">
        <h1 className="p-2 text-4xl">
          {toggleSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {toggleSignInForm && (
          <input
            ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
        />
        <p className="m-2 text-xl text-red-500">{valid}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 m-2 w-full bg-red-600 rounded-lg cursor-pointer"
        >
          {toggleSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="m-2 text-xl cursor-pointer" onClick={handleOnClick}>
          {toggleSignInForm
            ? "Not New User? Sign in now."
            : "New User? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default LoginAndSignup;
