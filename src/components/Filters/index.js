import PropTypes from "prop-types";
import React, { Component } from "react";
import RangeOfDate from "./RangeOfDate";
import SelectFilter from "./Select"

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array,
    };

    render() {
        return (
            <div>
                <SelectFilter articles={this.props.articles} />
                <RangeOfDate />
            </div>
        );
    }
}

export default Filters;
