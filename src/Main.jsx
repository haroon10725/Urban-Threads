import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import "./App.css"
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
