import React, { Component } from "react";
export default class Button2 extends Component {
  render(props) {
    let { title, task } = this.props;
    return (
      <button
        className="btn-floating waves-effect waves-light red button2 pulse"
        onClick={task}
      >
        {title}
      </button>
    );
  }
}
