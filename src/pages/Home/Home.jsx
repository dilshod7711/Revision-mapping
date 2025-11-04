import React from "react";
import { ShoppingBag, ChefHat, Star, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-yellow-300">MyStore</span> 🍽️
            </h1>
            <p className="text-lg text-indigo-100">
              Discover the best products and recipes that make your lifestyle
              more joyful and delicious. Shop smart, cook better, live happier!
            </p>
            <div className="flex gap-4">
              <Link
                to="/products"
                className="bg-yellow-400 text-indigo-800 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                🛒 Shop Now
              </Link>
              <Link
                to="/recipes"
                className="border border-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition"
              >
                🍳 Explore Recipes
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://images.pexels.com/photos/3945661/pexels-photo-3945661.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Shopping illustration"
              className="w-96 md:w-[480px] drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-12">
          Why Choose <span className="text-purple-600">MyStore</span>?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShoppingBag size={40} className="text-indigo-600" />,
              title: "Top Quality Products",
              desc: "We bring you only the best and verified items from trusted brands.",
            },
            {
              icon: <ChefHat size={40} className="text-purple-600" />,
              title: "Delicious Recipes",
              desc: "Explore recipes crafted by top chefs and food lovers.",
            },
            {
              icon: <Star size={40} className="text-yellow-500" />,
              title: "Customer Satisfaction",
              desc: "We prioritize your happiness and seamless shopping experience.",
            },
            {
              icon: <Clock size={40} className="text-green-500" />,
              title: "Fast Delivery",
              desc: "Get your orders quickly and enjoy hassle-free services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
            alt="About Us"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-indigo-700">
              More Than Just a Store
            </h2>
            <p className="text-gray-600 leading-relaxed">
              MyStore is more than an eCommerce site — it’s a community for
              people who value quality, taste, and lifestyle. We believe in
              making every product meaningful and every meal memorable.
            </p>
            <p className="text-gray-600">
              From shopping essentials to culinary inspiration, we bring joy to
              your daily life.
            </p>
            <Link
              to="/about"
              className="inline-block mt-3 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Explore Something Amazing?
        </h2>
        <p className="text-indigo-100 mb-8">
          Start shopping or find your next favorite recipe today!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/products"
            className="bg-yellow-400 text-indigo-800 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-300 transition"
          >
            🛍️ Start Shopping
          </Link>
          <Link
            to="/recipes"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            🍲 Browse Recipes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
