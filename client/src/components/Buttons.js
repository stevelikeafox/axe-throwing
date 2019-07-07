import React, { Component } from "react";
export default class Button extends Component {
  render(props) {
    let { title, task, id } = this.props;
    return (
      <button onClick={task} id={id}>
        {title}
      </button>
    );
  }
}
