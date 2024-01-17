
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookieContext } from "./cookies/CookiesProvider";
import LandingPage from "./pages/landingpage";
import CartPage from "./pages/cartpage";
import Product from "./pages/Productpage";
import Payment from "./pages/Payment";
import ProductOverview from "./pages/ProductOverview";
import OrderPage from "./pages/orderpage/Orderpage";
import Error from "./pages/errors/404";
import Error404 from "./pages/errors/404";
import Cookies from "./AppCookies/cookies";

export default function App() {
  const { setCartCookie } = useCookieContext();

  const cart = {
    item1: {
      name: "Boy'S Navy Pant",uuid:"65a237e0b138add046db5b30", qty: 1,
      subtotal: 29.5, colour: "Blue", size: "Size: S(US)/ M(Japan)"
    },
    item2: {
      name: "Shinu Sleeve Shirt",uuid:"65a237e0b138add046db5b30", qty: 1,
      subtotal: 39.95, colour: "Gray", size: "Size: XS(US)/ M(Japan)"
    }
  };

  // I Set the entire cart to cookies globally
  setCartCookie(cart);

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
        <Route path="cookie" element={<Cookies />} />
        <Route path="products" element={<Product />} />
        <Route path="payment" element={<Payment />} />
        <Route path="products/:category/:subCategory/:productUUID" element={<ProductOverview />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
