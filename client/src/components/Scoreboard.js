import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css";

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.props = { ...props };
    //  updateText = updateText.bind(this);
  }

  componentDidMount(currentPlayer) {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <h2 class="flow-text">Scoreboard</h2>
        <div className="scoreboard">
          <table className="responsive-table light-blue lighten-4">
            <thead>
              <tr>
                <th>Player</th>
                <th>Round One</th>
                <th>Round Two</th>
                <th>Round Three</th>
                <th>Round Four</th>
                <th>Round Five</th>
                <th>Round Six</th>
                <th>Round Seven</th>
                <th>Round Eight</th>
                <th>Round Nine</th>
                <th>Round Ten</th>
                <th>Current Score</th>
              </tr>
            </thead>
            <tbody>
              {this.props.players.map(players => (
                <tr key={players.id} className="light-blue lighten-5">
                  <td>
                    {players.firstName} {players.surname}
                    {/* <p> id: {players.id} </p> */}
                  </td>
                  <td>{players.roundOne}</td>
                  <td>{players.roundTwo}</td>
                  <td>{players.roundThree}</td>
                  <td>{players.roundFour}</td>
                  <td>{players.roundFive}</td>
                  <td>{players.roundSix}</td>
                  <td>{players.roundSeven}</td>
                  <td>{players.roundEight}</td>
                  <td>{players.roundNine}</td>
                  <td>{players.roundTen}</td>
                  <td>{players.totalScore}</td>
                  {/* <p>Throw: {players.throwNumber}</p> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
