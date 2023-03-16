import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FlickrProvider } from "./store/flickr-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlickrProvider>
      <App />
    </FlickrProvider>
  </React.StrictMode>
);
