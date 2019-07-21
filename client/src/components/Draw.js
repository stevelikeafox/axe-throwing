import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css";

export default class Draw extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    //  updateText = updateText.bind(this);
  }

  componentDidMount(currentPlayer) {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <h2 className="flow-text">Sudden Death</h2>
        <div className="scoreboard">
          <div className="suddenDeathText">
            It is a tie! In a tie a "Sudden Death" throw is made for the highest
            score, sudden death throws are done until one thrower scores higher
            than the other.
          </div>
          <table className="responsive-table light-blue lighten-4">
            <thead>
              <tr>
                <th>Player</th>
                <th>Total Score</th>
              </tr>
            </thead>

            <tbody>
              {this.state.players.map(players => (
                <tr key={players.id} className="light-blue lighten-5">
                  <td>
                    {players.firstName} {players.surname}
                    {/* <p> id: {players.id} </p> */}
                  </td>
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
