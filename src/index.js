import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Store from "./redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //agar redux vale code ko react vale code k sath link karna hai toh app component ko provider k andar wrap krna hai es sy sari functionality redux ki app aur uske children use kar paengy
  
  <Provider store={Store}>
    <App />
  </Provider>
);
