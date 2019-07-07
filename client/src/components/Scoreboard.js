import React, { Component } from "react";

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    //  updateText = updateText.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Scoreboard</h2>
        <div>
          <ul>
            {this.state.players.map(players => (
              <li key={players.id}>
                <p>
                  Player: {players.firstName} {players.surname}
                  {/* <p> id: {players.id} </p> */}
                </p>
                <p>Current Score: {players.totalScore}</p>
                {/* <p>Throw: {players.throwNumber}</p> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
