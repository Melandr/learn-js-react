import PropTypes from "prop-types";
import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";

export default class App extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters articles={[]} />
                <ArticleList />
            </div>
        );
    }
}
