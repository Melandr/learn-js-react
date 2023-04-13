import PropTypes from "prop-types";
import React from "react";
import App from "./App";
import store from "../store";
import { Provider } from "react-redux";

function Root(props) {
    Root.propTypes = {};

    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    );
}

export default Root;
