import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import { ThemeProvider } from "@material-tailwind/react";
// importing the pages
import LandingPage from "./pages/landingpage";
import CartPage from "./pages/cartpage"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


