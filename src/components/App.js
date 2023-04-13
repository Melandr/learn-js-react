import PropTypes from "prop-types";
import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";

export default class App extends Component {
    static propTypes = {};

    render() {
        const { articles } = this.props;

        return (
            <div>
                <UserForm />
                <Filters articles={articles} />
                <ArticleList articles={articles} defaultOpenId={articles[0].id} />
            </div>
        );
    }
}
