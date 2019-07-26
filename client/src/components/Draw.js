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

  zeroPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].suddenDeathThrowNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].suddenDeathThrowNumber =
      this.state.players[currentPlayer].suddenDeathThrowNumber + 1;
    this.setState({ players });

    console.log(players[currentPlayer]);
    this.playerchange(currentPlayer, numPlayers, round);
  };

  onePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].suddenDeathThrowNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].suddenDeathThrowNumber =
      this.state.players[currentPlayer].suddenDeathThrowNumber + 1;
    players[currentPlayer].suddenDeathScore =
      this.state.players[currentPlayer].suddenDeathScore + 1;

    this.setState({ players });

    console.log(players[currentPlayer]);

    this.playerchange(currentPlayer, numPlayers, round);
  };

  threePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].suddenDeathThrowNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].suddenDeathThrowNumber =
      this.state.players[currentPlayer].suddenDeathThrowNumber + 1;
    players[currentPlayer].suddenDeathScore =
      this.state.players[currentPlayer].suddenDeathScore + 3;

    this.setState({ players });

    console.log(players[currentPlayer]);

    this.playerchange(currentPlayer, numPlayers, round);
  };

  fivePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].suddenDeathThrowNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].suddenDeathThrowNumber =
      this.state.players[currentPlayer].suddenDeathThrowNumber + 1;
    players[currentPlayer].suddenDeathScore =
      this.state.players[currentPlayer].suddenDeathScore + 5;

    this.setState({ players });

    console.log(players[currentPlayer]);

    this.playerchange(currentPlayer, numPlayers, round);
  };

  sevenPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].suddenDeathThrowNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].suddenDeathThrowNumber =
      this.state.players[currentPlayer].suddenDeathThrowNumber + 1;
    players[currentPlayer].suddenDeathScore =
      this.state.players[currentPlayer].suddenDeathScore + 7;

    this.setState({ players });

    console.log(players[currentPlayer]);

    this.playerchange(currentPlayer, numPlayers, round);
  };

  playerchange(currentPlayer, numPlayers, round) {
    let nextPlayer = document.getElementById(currentPlayer + 1 + "tracker");
    let previousPlayer = document.getElementById(currentPlayer + "tracker");
    let reset = document.getElementById("0tracker");

    if (currentPlayer === numPlayers) {
      previousPlayer.style.display = "none";
      reset.style.display = "block";
      console.log("New Round");
      console.log(numPlayers);
      console.log(currentPlayer);
      console.log(round);

      //sort by total score
      let sorted = this.state.players.slice().sort((a, b) => {
        return b.suddenDeathScore - a.suddenDeathScore;
      });

      console.log(sorted);
      // check each total score against [0]
      for (let i = 0; i < sorted.length; i++) {
        if (sorted.suddenDeathScore) {
        }
      }

      //       var array = ['mario','luigi','kong'],
      // index = 1; // your index here
      // array.splice(index + 1, array.length - (index + 1) );

      // remove array items from total score if less

      // return new array

      // if new array.length == 1 show winner message.
    } else {
      console.log("Next Player");

      nextPlayer.style.display = "block";
      previousPlayer.style.display = "none";
      console.log(numPlayers);
      // console.log(previousplay);
      console.log(currentPlayer);
    }
  }

  winner() {
    let winner = this.state.players.slice().sort((a, b) => {
      return b.totalScore - a.totalScore;
    })[0];

    this.setState({
      winner: `Congratulations
      ${winner.firstName}
      ${winner.surname} you Won With ${winner.totalScore} points`
    });
    let winnerbox = document.getElementById("winnerbox");
    winnerbox.style.display = "block";
    this.setState({ visibility: "none" });
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
                This is Throw Number: {players.suddenDeathThrowNumber}
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
