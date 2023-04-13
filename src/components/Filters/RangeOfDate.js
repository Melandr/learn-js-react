import React, { Component } from "react";
import { addDays, format } from "date-fns";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

class RangeOfDate extends Component {
    state = {
        from: null,
        to: null,
        days: null,
    };

    render() {
        const today = new Date();
        const { from, to, days } = this.state;
        const footer =
            days && days.length > 0 ? <p>You selected {days.length} day(s).</p> : <p>Please pick one or more days.</p>;

        return (
            <div>
                <DayPicker mode="multiple" selected={days} onSelect={this.handleDayClick} footer={footer} />
            </div>
        );
    }

    handleDayClick = (day) => {
        this.setState({ days: day });
    };

    selectRange = (day) => {
        // console.log(day);
    };
}

export default RangeOfDate;
