import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="bg-light col-3 input">
        {this.props.equation.join("")} <br />
        {this.props.result}
      </div>
    );
  }
}

export default Input;
