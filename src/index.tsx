import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");// Get the root container element from the DOM
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(// Render the main App component wrapped in React.StrictMode for highlighting potential problems
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
