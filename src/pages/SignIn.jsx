import React, { useState } from "react";
import logo from "../assets/daily-wellness-logo.jpg"; // Ensure this path is correct

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in with:", email, password);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#2D3748] flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#FF1B6B] rounded-full opacity-10"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#FFA726] rounded-full opacity-10"></div>

        {/* Logo Section */}
        <div className="relative text-center">
          <img
            src={logo}
            alt="Daily Wellness Logo"
            className="w-24 h-24 mx-auto mb-4 object-contain sm:w-32 sm:h-32"
          />
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="/signup"
              className="font-medium text-[#4267B2] hover:text-[#365899]"
            >
              create a new account
            </a>
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#4267B2] focus:ring-[#4267B2] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#4267B2] hover:text-[#365899]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
