import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import CommentList from "../CommentList";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { deleteArticle } from "../../AC";
import "./style.css";

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
    };

    state = {
        updateIndex: 0,
    };

    render() {
        const { article, isOpen, toggleOpen } = this.props;

        return (
            <div className="wrapper">
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
                <button onClick={this.handleDelete}>delete me</button>
                <CSSTransition classNames="article" in={this.props.isOpen} timeout={500}>
                    <div>{this.getBody()}</div>
                </CSSTransition>
            </div>
        );
    }

    handleDelete = () => {
        const { deleteArticle, article } = this.props;
        deleteArticle(article.id);

        console.log("----", "deleting article");
    };

    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;

        return (
            <section>
                {article.text}
                <button onClick={() => this.setState({ updateIndex: this.state.updateIndex + 1 })}>update</button>
                <CommentList comments={article.comments} />
            </section>
        );
    }
}

export default connect(null, { deleteArticle })(Article);
