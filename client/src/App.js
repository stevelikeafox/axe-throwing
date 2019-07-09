import React, { Component } from "react";
import Button from "./components/Buttons";
import Scoreboard from "./components/Scoreboard";
import M from "materialize-css";
import "./App.css";

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
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
          roundFour: 0,
          roundFive: 0,
          roundSix: 0,
          roundSeven: 0,
          roundEight: 0,
          roundNine: 0,
          roundTen: 0,
          throwNumber: 1
        },

        {
          id: 1,
          firstName: "Andrew",
          surname: "Todd",
          totalScore: 0,
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
          roundFour: 0,
          roundFive: 0,
          roundSix: 0,
          roundSeven: 0,
          roundEight: 0,
          roundNine: 0,
          roundTen: 0,
          throwNumber: 1
        },
        {
          id: 2,
          firstName: "Adam",
          surname: "Sime",
          totalScore: 0,
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
          roundFour: 0,
          roundFive: 0,
          roundSix: 0,
          roundSeven: 0,
          roundEight: 0,
          roundNine: 0,
          roundTen: 0,
          throwNumber: 1
        },
        {
          id: 3,
          firstName: "James",
          surname: "Clark",
          totalScore: 0,
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
          roundFour: 0,
          roundFive: 0,
          roundSix: 0,
          roundSeven: 0,
          roundEight: 0,
          roundNine: 0,
          roundTen: 0,
          throwNumber: 1
        },
        {
          id: 4,
          firstName: "Andy",
          surname: "Wright",
          totalScore: 0,
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
          roundFour: 0,
          roundFive: 0,
          roundSix: 0,
          roundSeven: 0,
          roundEight: 0,
          roundNine: 0,
          roundTen: 0,
          throwNumber: 1
        }
      ],
      currentPlayer: 0,
      currentRound: 0
    };
  }

  componentDidMount(currentPlayer) {
    let playe = this.state.currentPlayer;
    let play = document.getElementById(playe);
    play.style.display = "block";
    M.AutoInit();
  }

  endGame() {
    console.log("end game");
  }

  zeroPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
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
    let round = this.state.players[currentPlayer].throwNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
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

    this.roundScore(1, currentPlayer, round, players);
  };

  threePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].throwNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
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
    this.roundScore(3, currentPlayer, round, players);
  };

  fivePoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].throwNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
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
    this.roundScore(5, currentPlayer, round, players);
  };

  sevenPoints = () => {
    let players = [];
    let currentPlayer = this.state.currentPlayer;
    let round = this.state.players[currentPlayer].throwNumber;

    players = Object.assign(this.state.players);

    let numPlayers = players.length - 1;

    if (currentPlayer === numPlayers) {
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
    this.roundScore(7, currentPlayer, round, players);
  };

  playerchange(currentPlayer, numPlayers) {
    let nextPlayer = document.getElementById(currentPlayer + 1);
    let previousPlayer = document.getElementById(currentPlayer);
    let reset = document.getElementById(0);
    if (currentPlayer === numPlayers) {
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

  roundScore(score, currentPlayer, round, players) {
    console.log("score:", score);
    console.log("Player:", currentPlayer);
    console.log("Round:", round);
    console.log("players:", players);

    switch (round) {
      case 1:
        players[currentPlayer].roundOne = this.state.players[
          currentPlayer
        ].roundOne = score;
        break;
      case 2:
        players[currentPlayer].roundTwo = this.state.players[
          currentPlayer
        ].roundTwo = score;
        break;
      case 3:
        players[currentPlayer].roundThree = this.state.players[
          currentPlayer
        ].roundThree = score;
        break;
      case 4:
        players[currentPlayer].roundFour = this.state.players[
          currentPlayer
        ].roundFour = score;
        break;
      case 5:
        players[currentPlayer].roundFive = this.state.players[
          currentPlayer
        ].roundFive = score;
        break;
      case 6:
        players[currentPlayer].roundSix = this.state.players[
          currentPlayer
        ].roundSix = score;
        break;
      case 7:
        players[currentPlayer].roundSeven = this.state.players[
          currentPlayer
        ].roundSeven = score;
        break;
      case 8:
        players[currentPlayer].roundEight = this.state.players[
          currentPlayer
        ].roundEight = score;
        break;
      case 9:
        players[currentPlayer].roundNine = this.state.players[
          currentPlayer
        ].roundNine = score;
        break;
      case 10:
        players[currentPlayer].roundTen = this.state.players[
          currentPlayer
        ].roundTen = score;
        break;
      default:
    }
  }

  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    return (
      <div className="bg">
        <div className="container">
          <h1>Axe Throwers Anonymous</h1>

          <Scoreboard players={this.state.players} />

          <ul>
            {this.state.players.map(players => (
              <li
                key={players.id}
                style={shown}
                id={players.id}
                className="logpoints"
              >
                <h3>
                  Now Throwing : {players.firstName} {players.surname}
                </h3>
                {/* <p>Current Score: {players.totalScore}</p> */}
                <p>This is Throw Number: {players.throwNumber}</p>
                <p>What Did You Score?</p>
                <Button title={"No Points"} task={this.zeroPoints} />
                <Button title={"1 point"} task={this.onePoints} />
                <Button title={"3 points"} task={this.threePoints} />
                <Button title={"5 points"} task={this.fivePoints} />
                <Button title={"7 points"} task={this.sevenPoints} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
