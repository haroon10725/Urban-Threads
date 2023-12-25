import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/navbar.jsx";
import Frontier from "./components/Frontier/frontier.jsx";
import Slider from "./components/SliderBox/slider.jsx"
import Categories from "./components/Category/category.jsx";
import Bottom from "./components/Bottom/bottom.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

import "./App.css"
import { ThemeProvider } from "@material-tailwind/react";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      {/* <Navbar />
      <Frontier />
      <Slider />
      <Categories />
      <Bottom />
      <Contact />
      <Footer /> */}
    </ThemeProvider>
  </React.StrictMode>
);
