import React, { Component } from "react";
import CommentList from "./CommentList";

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isOpenComments: false,
        };
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;
        const { isOpenComments } = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
                {this.getBody()}
                <button onClick={this.toggleComments}>{isOpenComments ? "close comments" : "open comments"}</button>
                {this.getComments()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const { article } = this.props;
        return <section>{article.text}</section>;
    }

    getComments() {
        if (!this.state.isOpenComments) return null;

        const { comments } = this.props.article;
        return <CommentList comments={comments} />;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    toggleComments = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments && this.state.isOpen,
        });
    };
}

// export default function Article(props) {
//     const { article } = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     );
// }
