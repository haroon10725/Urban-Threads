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
import OrderPage from "./pages/orderpage/Orderpage";
import Error from "./pages/errors/404"
import Error404 from "./pages/errors/404"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product" element={<Product />} />
        <Route path="paymnet" element={<Payment />} />
        <Route path="overview" element={<ProductOverview />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="error" element={<Error />} />
        <Route path="payment" element={<Payment />} />
        <Route path="products/:main_category/:sub_category/:productUUID" element={<ProductOverview />} />
        <Route path="*" element={<Error404 />} />
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
