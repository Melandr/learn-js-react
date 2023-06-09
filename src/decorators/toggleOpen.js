import React, { Component as ReactComponent } from "react";

export default (OriginalComponent) =>
    class WrapperComponent extends ReactComponent {
        state = {
            isOpen: false,
        };

        render() {
            return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />;
        }

        toggleOpen = (ev) => {
            ev && ev.preventDefault && ev.preventDefault();

            this.setState({
                isOpen: !this.state.isOpen,
            });
        };
    };

// const func = (...args) => {
//     console.log("----", ...args);
//     return originalFunc(...args);
// };
