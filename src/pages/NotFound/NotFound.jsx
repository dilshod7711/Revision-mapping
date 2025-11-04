import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-center px-6">
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found 😢
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back home safely.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
      >
        <Home size={20} />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
