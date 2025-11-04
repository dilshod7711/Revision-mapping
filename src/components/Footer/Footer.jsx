import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyStore</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Discover amazing products and enjoy exclusive deals every day.
            <span className="font-semibold">MyStore</span> brings quality and
            inspiration together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-300 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/recipes" className="hover:text-yellow-300 transition">
                Recipes
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-start gap-5">
            {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Icon className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">MyStore</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
