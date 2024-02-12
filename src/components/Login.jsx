import lock from "../assets/lock.png";
import user from "../assets/user.png";
import google from "../assets/google.png";
import logo from "../assets/react.svg";
import { useState } from "react";
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
      navigate("/");
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
          className={`flex items-center mb-4 border-b py-2 ${
            error ? "border-red-400" : ""
          }`}
        >
          <img src={user} alt="user icon" className="mx-2 w-5" />
          <input
            type="text"
            placeholder="Email"
            className="text-xs flex-1 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`flex items-center mb-4 border-b py-2 relative ${
            error ? "border-red-400" : ""
          }`}
        >
          <img src={lock} alt="password icon" className="mx-2 w-5" />
          <input
            type="password"
            placeholder="Password"
            className="text-xs flex-1 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-400 text-xs text-right mb-4 absolute top-12 right-0">
              {error}
            </p>
          )}
        </div>

        <button
          className="bg-darkblue  text-white flex-1 py-3 mt-10 rounded-lg text-xs  hover:bg-pageblue mb-4"
          onClick={() => signIn()}
        >
          LOGIN
        </button>
        <div
          className="flex items-center justify-center mb-4 border-darkblue border rounded-lg py-3 cursor-pointer"
          onClick={() => signInWithGoogle()}
        >
          <img src={google} alt="google icon" className="mr-2 w-4" />
          <p className="text-xs">
            Login with <span className="font-bold">Google</span>
          </p>
        </div>
        <p className="text-xs text-center">
          Don't have an account?{" "}
          <Link to={"/register"}>
            <span className="text-blue-400">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
