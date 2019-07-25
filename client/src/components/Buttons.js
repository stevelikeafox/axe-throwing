import React, { Component } from "react";
export default class Button extends Component {
  render(props) {
    let { title, task, value } = this.props;
    return (
      <button
        className="btn-floating btn-large waves-effect waves-light red button"
        onClick={task}
        value={value}
      >
        {title}
      </button>
    );
  }
}
