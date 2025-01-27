import { useState } from "react";
import Header from "./Header";

const LoginAndSignup = () => {
  const [toggleSignInForm, setToggleSignInForm] = useState(false);
  function handleOnClick() {
    setToggleSignInForm(!toggleSignInForm);
  }
  return (
    <div className="">
      <Header />
      <div>
        <img
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
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full border border-white bg-gray-700 rounded-lg"
        />
        <button className="p-2 m-2 w-full bg-red-600 rounded-lg cursor-pointer">
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
