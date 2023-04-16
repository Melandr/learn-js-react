import PropTypes from "prop-types";
import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { connect } from "react-redux";

class App extends Component {
    static propTypes = {};

    render() {
        const { articles } = this.props;

        return (
            <div>
                <Counter />
                <UserForm />
                <Filters articles={articles} />
                <ArticleList />
            </div>
        );
    }
}

export default connect(({ articles }) => ({ articles }))(App);
