import React from "react";
import { Link } from "react-router-dom";
import notFoundAnimation from "../assets/notFoundAnimation.json";
import LottieAnimation from "../components/LottieAnimation";

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-[450px] flex flex-col items-center justify-center px-4 py-12 my-10 text-center">
      <LottieAnimation
        animationData={notFoundAnimation}
        width="800px"
        height="500px"
      />
      {/* Illustration */}

      {/* Button */}
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 mt-6 rounded hover:bg-green-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
