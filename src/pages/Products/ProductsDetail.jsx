import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../helpers/API/api";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const ProductsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    API.get(`/products/${id}`).then((res) => {
      setData(res.data);
      setMainImage(res.data.images?.[0] || res.data.thumbnail);
    });
  }, [id]);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 space-y-4">
          <div className="border rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mainImage}
              alt={data.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>

          <div className="flex items-center gap-4">
            <p className="text-indigo-600 font-bold text-2xl">${data.price}</p>
            <span className="flex items-center text-yellow-500 gap-1">
              <Eye size={18} />
              {data.rating} ⭐
            </span>
            <span className="text-gray-500">{data.brand}</span>
          </div>

          <p className="text-sm text-gray-400">
            {data.availabilityStatus || "In Stock"}
          </p>
          <p className="text-xs text-gray-400">{data.warrantyInformation}</p>
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-inner w-fit">
            <button className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 active:scale-95 transition">
              −
            </button>

            <span className="min-w-[170px] text-center font-semibold text-gray-700">
              {data.price}
            </span>

            <button className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 active:scale-95 transition">
              +
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl hover:bg-red-100 transition">
              <Heart size={20} className="text-red-500" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
