import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import { articles } from "./fixtures";
import "../src/index.css";

const container = document.querySelector("#container");

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <Root articles={articles} />
    </React.StrictMode>
);
