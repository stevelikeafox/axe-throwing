import React, { Component } from "react";
export default class Button extends Component {
  render(props) {
    let { title, task } = this.props;
    return (
      <button
        className="btn-floating btn-large waves-effect waves-light red"
        onClick={task}
      >
        {title}
      </button>
    );
  }
}
