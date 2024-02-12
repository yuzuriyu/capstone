import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../assets/lock.png";
import logo from "../assets/react.svg";
import user from "../assets/user.png";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setAuthenticatedEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful. Received token:", data.token);
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        localStorage.setItem("authenticatedEmail", email); // Store authenticatedEmail in localStorage

        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        setError("Invalid username or password");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
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
          type="button"
          className="bg-darkblue text-white flex-1 py-3 mt-10 rounded-lg text-xs hover:bg-pageblue mb-4"
          onClick={handleLogin}
        >
          LOGIN
        </button>
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
