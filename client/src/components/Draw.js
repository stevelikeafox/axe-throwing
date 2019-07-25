import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Button from "../components/Buttons";
import Button2 from "../components/Button2";

import M from "materialize-css";

export default class Draw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      startButton: true,
      showAddPlayersButton: false,
      showScoring: false,
      currentPlayer: 0,
      visibility: "none"
    };
    //  updateText = updateText.bind(this);
  }

  componentDidMount() {
    let playerLength = this.state.players.length;
    for (let i = 0; i < playerLength; i++) {
      this.state.players[i].id = i;
      this.state.players[i].drawId = i + "tracker";
      console.log("Player ID:", this.state.players[i].id);
      console.log("Player:", this.state.players);

      M.AutoInit();
    }
  }

  startSuddenDeath = () => {
    this.setState({
      showScoring: true,
      showAddPlayersButton: false,
      startButton: false,
      visibility: "block"
    });
    this.displayControls();
  };

  displayControls() {
    let playe = this.state.currentPlayer;
    let play = document.getElementById("0tracker");
    console.log(play);
    play.style.display = "block";
  }

  render() {
    var show = {
      display: this.state.show ? "block" : "none"
    };

    var visibility = {
      display: this.state.visibility
    };

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
                <th>Sudden Death Score</th>
              </tr>
            </thead>

            <tbody>
              {this.state.players.map(players => (
                <tr key={players.id} className="light-blue lighten-5">
                  <td>
                    {players.firstName} {players.surname}
                    {/* <p> id: {players.id} </p> */}
                  </td>
                  <td>{players.suddenDeathScore}</td>
                  {/* <p>Throw: {players.throwNumber}</p> */}
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.startButton && (
            <div className="buttonContainer">
              {" "}
              <Button2
                title={"Start Sudden Death!"}
                task={this.startSuddenDeath}
              />
            </div>
          )}
        </div>
        <ul id="vis2" style={visibility}>
          {this.state.players.map(players => (
            <li
              key={players.id}
              id={players.drawId}
              style={show}
              className="logpoints z-depth-5"
            >
              <h3 className="flow-text">
                Now Throwing : {players.firstName} {players.surname}
              </h3>
              {/* <p>Current Score: {players.totalScore}</p> */}
              <p className="flow-text">
                This is Throw Number: {players.throwNumber}
              </p>
              <p className="flow-text">What Did You Score?</p>
              <Button title={"No Points"} task={this.zeroPoints} />
              <Button title={"1 point"} task={this.onePoints} />
              <Button title={"3 points"} task={this.threePoints} />
              <Button title={"5 points"} task={this.fivePoints} />
              <Button title={"7 points"} task={this.sevenPoints} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
