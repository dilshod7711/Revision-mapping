import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../helpers/API/api";
import { Heart, Share2 } from "lucide-react";

const RecipesDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/recipes/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-gray-600">
            {data.description || "No description available."}
          </p>

          <div className="flex flex-wrap gap-4 text-gray-700">
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              Cuisine: {data.cuisine}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              Meal Type: {data.mealType}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              Cook Time: {data.cookTimeMinutes} min
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              Difficulty: {data.difficulty}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              Reviews: {data.reviewCount}
            </span>
            <span className="bg-yellow-100 px-3 py-1 rounded-full font-medium text-yellow-600">
              ⭐ {data.rating}
            </span>
          </div>

          <div className="flex gap-4 mt-5">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">
              <Heart size={20} />
              Like
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetail;
