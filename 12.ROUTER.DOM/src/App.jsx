import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import ProductDetails from "./pages/ProductDetails";

// Routes Route

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ic ice komponent */}
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        {/* ic ice komponent */}
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
