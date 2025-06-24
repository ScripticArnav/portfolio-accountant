import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/features/authSlice";
import axios from "axios";
import logo from "../assets/logo.png";
import backendUrl from "../url";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post(`${backendUrl}/users/login`, {
        email,
        password,
      });
      if (response.data && response.data.data) {
        dispatch(login(response.data.data));
        navigate("/profile");
      }
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-4xl px-6 py-16 flex flex-col items-center justify-center bg-white/10 rounded-3xl mb-16">
        <img src={logo} alt="logo" className="h-20 w-20 mb-4" />
        <span className="text-3xl font-bold tracking-tight mb-6 text-white">AS Fintacxx Solution</span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold text-white mb-4">
          Empowering Financial Growth
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}Sign In
          </span>
        </h1>
        <p className="mb-10 text-lg text-center text-neutral-300 max-w-2xl">
          Sign in to access your personalized dashboard, manage your finances, and explore tailored solutions for your financial growth.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          {error && <div className="mb-4 text-red-600 text-center font-semibold bg-red-50 border border-red-200 rounded p-2">{error}</div>}
          <div className="mb-4">
            <label className="block text-white mb-2 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm bg-white/90 text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm bg-white/90 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 text-white font-bold text-lg shadow-md hover:from-orange-600 hover:to-orange-900 transition mb-2"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center w-full">
          <span className="text-neutral-200">Not registered?</span>
          <Link
            to="/signup"
            className="ml-2 inline-block bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-900 font-semibold shadow"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 