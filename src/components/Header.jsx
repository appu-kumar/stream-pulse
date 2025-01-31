import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
