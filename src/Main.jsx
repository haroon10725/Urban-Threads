import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import { ThemeProvider } from "@material-tailwind/react";
// importing the pages
import LandingPage from "./pages/landingpage";
import CartPage from "./pages/cartpage"
import Product from "./pages/Productpage";
import Payment from "./pages/Payment"
import ProductOverview from "./pages/ProductOverview"
import Error from "./pages/errors/404"




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product" element={<Product />} />
        <Route path="paymnet" element={<Payment />} />
        <Route path="overview" element={<ProductOverview />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter >
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


