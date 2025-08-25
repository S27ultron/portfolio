import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
sessionStorage.removeItem('redirect');
window.history.replaceState(null, '', redirect);
}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
