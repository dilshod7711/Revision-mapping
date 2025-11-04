import React, { useEffect, useState } from "react";
import { API } from "../../helpers/API/api";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleNavigate(id) {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    API.get("/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow">
        🌟 Our Products
      </h1>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              {product.availabilityStatus === "In Stock" && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  In Stock
                </span>
              )}
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <p className="text-indigo-600 font-bold text-lg">
                  ${product.price}
                </p>
                <span className="text-yellow-500 font-semibold text-sm">
                  ⭐ {product.rating}
                </span>
              </div>

              <p className="text-gray-400 text-sm">{product.brand}</p>

              <div className="flex justify-between items-center gap-2 mt-3">
                <button className="flex-1 cursor-pointer  flex items-center justify-center gap-1 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition font-semibold">
                  <ShoppingCart size={18} />
                  Add
                </button>

                <button className="p-2 cursor-pointer  rounded-xl border border-gray-300 hover:bg-red-100 hover:text-red-600 transition">
                  <Heart size={20} />
                </button>

                <button
                  onClick={() => handleNavigate(product.id)}
                  className="p-2 cursor-pointer rounded-xl border border-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  <Eye size={20} />
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                {product.warrantyInformation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
