import React from "react";
import ReactDOM from "react-dom/client";
import ArticleList from "./components/ArticleList";
import { articles } from "./fixtures";

const container = document.querySelector("#container");

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <ArticleList articles={articles} />
    </React.StrictMode>
);
