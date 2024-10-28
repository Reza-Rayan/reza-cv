import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Styles
import "./index.css";
import "./styles/layout.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);