import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import logo from "../assets/daily-wellness-logo.jpg"; // Ensure this path is correct
import Footer from "./footer";
import Timer from "./Timer";
import Content from "./content";
import Socials from "./socials";

export default function Home() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 overflow-auto">
      {/* Logo Section */}
      <div className="w-full max-w-[500px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] h-auto mb-6 mt-32">
        <img
          src={logo}
          alt="Daily Wellness Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 mb-6">
        {/* Button 1: Navigate to AI Wellness Guru */}
        <button
          className="bg-gradient-to-b from-pink-500 via-pink-600 to-purple-700 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          onClick={() => navigate("/wellness")}
        >
          AI Wellness Guru
        </button>

        {/* Button 2: Navigate to Sign In */}
        <button
          className="bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>

        {/* Button 3: Navigate to Sign Up */}
        <button
          className="bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-700 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>

      {/* Text Section */}
      <div className="w-full max-w-4xl text-center">
        <Content />
        <Timer />
        <Socials />
        <Footer />
        
        
      </div>
    </div>
  );
}
