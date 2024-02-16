import lock from "../assets/lock.png";
import user from "../assets/user.png";
import google from "../assets/google.png";
import logo from "../assets/react.svg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (!userInfo) {
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Google sign-in failed");
    }
  };
  return (
    <div className="w-[366px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div>
        <img
          src={logo}
          alt=""
          className="w-[150px] my-8 m-auto animate-spin-slow"
        />
      </div>
      <div className="flex flex-col">
        <div
          className="flex items-center justify-center mb-4 border-darkblue border rounded-lg py-3 cursor-pointer"
          onClick={() => signInWithGoogle()}
        >
          <img src={google} alt="google icon" className="mr-2 w-4" />
          <p className="text-xs">
            Login with <span className="font-bold">Google</span>
          </p>
        </div>
        <p className="text-xs text-center">We are glad to see you back!</p>
      </div>
    </div>
  );
};

export default Login;
