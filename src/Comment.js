import React from "react";

export default function Comment({ comment }) {
    return (
        <div>
            <p>
                {comment.text}
                <br />
                <b>by {comment.user}</b>
            </p>
        </div>
    );
}
