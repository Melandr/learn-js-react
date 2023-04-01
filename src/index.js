import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { articles } from "./fixtures";
import "../src/index.css";

const container = document.querySelector("#container");

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <App articles={articles} />
    </React.StrictMode>
);
