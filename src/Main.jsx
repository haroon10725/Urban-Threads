import React from "react";
import ReactDOM from "react-dom/client";
import CookiesProvider from "./cookies/CookiesProvider.jsx";

import "./App.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
