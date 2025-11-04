import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Layout } from "./Layout/Layout";
import Products from "./pages/Products/Products";
import Recipes from "./pages/Recipes/Recipes";
import NotFound from "./pages/NotFound/NotFound";
import ProductsDetail from "./pages/Products/ProductsDetail";
import RecipesDetail from "./pages/Recipes/RecipesDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipesDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
