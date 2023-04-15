import React, { Component } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

class RangeOfDate extends Component {
    state = {
        range: null,
    };

    render() {
        const pastMonth = new Date(2016, 4);
        const { range } = this.state;

        let footer = <p>Please pick the first day.</p>;
        if (range?.from) {
            if (!range.to) {
                footer = <p>{format(range.from, "PPP")}</p>;
            } else if (range.to) {
                footer = (
                    <p>
                        {format(range.from, "PPP")} – {format(range.to, "PPP")}
                    </p>
                );
            }
        }

        return (
            <div>
                <DayPicker
                    mode="range"
                    defaultMonth={pastMonth}
                    selected={range}
                    onSelect={this.handleDayClick}
                    footer={footer}
                />
            </div>
        );
    }

    handleDayClick = (day) => {
        this.setState({ range: day });
    };
}

export default RangeOfDate;
