import React, { Component } from "react";
import Button from "./components/Buttons";
import Scoreboard from "./components/Scoreboard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 0,
          firstName: "Stephen",
          surname: "Willmot",
          totalScore: 0,
          throwNumber: 1
        },
        {
          id: 1,
          firstName: "James",
          surname: "Clark",
          totalScore: 0,
          throwNumber: 1
        },
        {
          id: 2,
          firstName: "Andrew",
          surname: "Todd",
          totalScore: 0,
          throwNumber: 1
        },
        {
          id: 3,
          firstName: "Adam",
          surname: "Sime",
          totalScore: 0,
          throwNumber: 1
        },
        {
          id: 4,
          firstName: "Andrew",
          surname: "Wright",
          totalScore: 0,
          throwNumber: 1
        }
      ],
      currentPlayer: 0,
      text: "parent State"
    };
  }

  zeroPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length;

    if (currentPlayer === numPlayers - 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].throwNumber =
      this.state.players[currentPlayer].throwNumber + 1;
    this.setState({ players });

    console.log(players[currentPlayer]);
  };

  onePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length;

    if (currentPlayer === numPlayers - 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].throwNumber =
      this.state.players[currentPlayer].throwNumber + 1;
    players[currentPlayer].totalScore =
      this.state.players[currentPlayer].totalScore + 1;
    this.setState({ players });

    console.log(players[currentPlayer]);
  };

  threePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length;

    if (currentPlayer === numPlayers - 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].throwNumber =
      this.state.players[currentPlayer].throwNumber + 1;
    players[currentPlayer].totalScore =
      this.state.players[currentPlayer].totalScore + 3;
    this.setState({ players });

    console.log(players[currentPlayer]);
  };

  fivePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length;

    if (currentPlayer === numPlayers - 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].throwNumber =
      this.state.players[currentPlayer].throwNumber + 1;
    players[currentPlayer].totalScore =
      this.state.players[currentPlayer].totalScore + 5;
    this.setState({ players });

    console.log(players[currentPlayer]);
  };

  sevenPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length;

    if (currentPlayer === numPlayers - 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer + 1 });
    }

    players[currentPlayer].throwNumber =
      this.state.players[currentPlayer].throwNumber + 1;
    players[currentPlayer].totalScore =
      this.state.players[currentPlayer].totalScore + 7;
    this.setState({ players });

    console.log(players[currentPlayer]);
  };

  render() {
    return (
      <div>
        <h1>Axe Thorwers Anonymous</h1>

        <Scoreboard players={this.state.players} />

        <h2>Scores</h2>
        <ul>
          {this.state.players.map(players => (
            <li key={players.id}>
              <p>
                Player: {players.firstName} {players.surname}
                {/* <p> id: {players.id} </p> */}
              </p>
              {/* <p>Current Score: {players.totalScore}</p> */}
              <p>Throw: {players.throwNumber}</p>
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
