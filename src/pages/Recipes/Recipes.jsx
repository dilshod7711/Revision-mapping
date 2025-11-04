import React, { useEffect, useState } from "react";
import { API } from "../../helpers/API/api";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    API.get("/recipes").then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        🍽️ Delicious Recipes
      </h1>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />

              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white
      ${
        recipe.difficulty === "Easy"
          ? "bg-green-500"
          : recipe.difficulty === "Medium"
          ? "bg-yellow-500"
          : "bg-red-500"
      }`}
              >
                {recipe.difficulty}
              </span>

              <div className="absolute top-3 right-3 flex flex-col space-y-2">
                <button className="bg-white/80 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
                  <Heart size={16} />
                </button>
                <button className="bg-white/80 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition">
                  <ShoppingCart size={16} />
                </button>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="bg-white/80 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
                >
                  <Eye size={16} />
                </Link>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {recipe.name}
              </h2>

              <p className="text-gray-500 text-sm line-clamp-2">
                {recipe.mealType?.join(", ")}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {recipe.rating}
                </span>
                <span className="text-gray-500 text-sm">
                  {recipe.cookTimeMinutes} mins
                </span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">
                  {recipe.cuisine || "Various Cuisine"}
                </p>
                <p className="text-sm text-gray-400">
                  {recipe.reviewCount} reviews
                </p>
              </div>

              <Link
                to={`/recipes/${recipe.id}`}
                className="block mt-4 w-full text-center bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
