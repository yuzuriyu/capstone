import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../assets/lock.png";
import logo from "../assets/react.svg";
import user from "../assets/user.png";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        if (data && data.message) {
          setError(data.message);
        } else {
          setError("Registration failed: Unexpected response from the server");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed: Unexpected error occurred");
    }
  };

  return (
    <div className="w-[366px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div>
        <img
          src={logo}
          alt="React Logo"
          className="w-[150px] my-8 m-auto animate-spin-slow"
        />
      </div>
      <div className="flex flex-col">
        <div
          className={`flex items-center mb-4 border-b py-2 ${
            error ? "border-red-400" : ""
          }`}
        >
          <img src={user} alt="User Icon" className="mx-2 w-5" />
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
          <img src={lock} alt="Password Icon" className="mx-2 w-5" />
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
        <div
          className={`flex items-center mb-4 border-b py-2 relative ${
            error ? "border-red-400" : ""
          }`}
        >
          <img src={lock} alt="Password Icon" className="mx-2 w-5" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-xs flex-1 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-400 text-xs text-right mb-4 absolute top-12 right-0">
              {error}
            </p>
          )}
        </div>

        <button
          className="bg-darkblue text-white flex-1 py-3 mt-10 rounded-lg text-xs hover:bg-pageblue mb-4"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="text-xs text-center">
          Already have an account?
          <Link to="/login">
            <span className="text-blue-400"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
