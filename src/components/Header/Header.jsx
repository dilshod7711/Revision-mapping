import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Heart, User, Home, Soup } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">
          <span className="text-purple-600">My</span>Store
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            <Home size={18} />
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            <ShoppingCart size={18} />
            Products
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            <Soup size={18} />
            Recipes
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button className="relative group">
            <Heart className="text-gray-700 hover:text-red-600 transition" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full group-hover:scale-110 transition">
              3
            </span>
          </button>

          {/* Cart Button */}
          <button className="relative group">
            <ShoppingCart className="text-gray-700 hover:text-indigo-600 transition" />
            <span className="absolute -top-1 -right-2 bg-indigo-600 text-white text-xs px-1.5 rounded-full group-hover:scale-110 transition">
              2
            </span>
          </button>

          {/* User Icon */}
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition">
            <User className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
