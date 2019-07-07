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

  componentDidMount(currentPlayer) {
    let playe = this.state.currentPlayer;
    let play = document.getElementById(playe);
    play.style.display = "block";
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
    this.playerchange(currentPlayer, numPlayers);
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
    this.playerchange(currentPlayer, numPlayers);
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
    this.playerchange(currentPlayer, numPlayers);
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
    this.playerchange(currentPlayer, numPlayers);
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

    //  console.log(players[currentPlayer]);
    this.playerchange(currentPlayer, numPlayers);
  };

  playerchange(currentPlayer, numPlayers) {
    let nextPlayer = document.getElementById(currentPlayer + 1);
    let previousPlayer = document.getElementById(currentPlayer);
    let reset = document.getElementById(0);
    if (currentPlayer === numPlayers - 1) {
      previousPlayer.style.display = "none";
      reset.style.display = "block";
      console.log("New Round");
      console.log(numPlayers);
      console.log(currentPlayer);
    } else {
      console.log("Next Player");

      nextPlayer.style.display = "block";
      previousPlayer.style.display = "none";
      console.log(numPlayers);
      // console.log(previousplay);
      console.log(currentPlayer);
    }
  }

  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    return (
      <div>
        <h1>Axe Thorwers Anonymous</h1>

        <Scoreboard players={this.state.players} />

        <h2>Scores</h2>
        <ul>
          {this.state.players.map(players => (
            <li key={players.id} style={shown} id={players.id}>
              <p>
                Player: {players.firstName} {players.surname}
              </p>
              <p> id: {players.id} </p>
              {/* <p>Current Score: {players.totalScore}</p> */}
              <p>Throw: {players.throwNumber}</p>
              <Button
                title={"No Points"}
                task={this.zeroPoints}
                playerid={players.id}
              />
              <Button
                title={"1 point"}
                task={this.onePoints}
                playerid={players.id}
              />
              <Button title={"3 points"} task={this.threePoints} />
              <Button
                title={"5 points"}
                task={this.fivePoints}
                playerid={players.id}
              />
              <Button
                title={"7 points"}
                task={this.sevenPoints}
                playerid={players.id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
