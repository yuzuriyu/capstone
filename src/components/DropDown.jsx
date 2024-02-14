import { useNavigate, Link } from "react-router-dom";
import logoutDark from "../assets/logout--dark.png";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const DropDown = () => {
  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="shadow-lg rounded-lg py-4 px-4 absolute top-12 right-4 w-56 z-50 bg-white">
      <div className="flex items-center border-t pt-2" onClick={signOutUser}>
        <img src={logoutDark} alt="" className="mr-4 w-5 cursor-pointer" />
        <p className="text-sm cursor-pointer">Logout</p>
      </div>
    </div>
  );
};

export default DropDown;
