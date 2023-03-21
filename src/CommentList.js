import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
    const commentElements = comments.map((comment) => (
        <li key={comment.id} style={{ display: "inline-block" }}>
            <Comment comment={comment} />
        </li>
    ));

    return <ul>{commentElements}</ul>;
}
