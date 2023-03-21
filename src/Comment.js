import React from "react";

export default function Comment(props) {
    const { comment } = props;

    return (
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
        </div>
    );
}
