import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import "../src/index.css";

const container = document.querySelector("#container");

ReactDOM.createRoot(container).render(
    // <React.StrictMode>
    <Root />
    // </React.StrictMode>
);
