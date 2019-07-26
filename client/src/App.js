import React, { Component } from "react";
import Button from "./components/Buttons";
import Button2 from "./components/Button2";

import Scoreboard from "./components/Scoreboard";
import Draw from "./components/Draw";

import M from "materialize-css";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 0,
          drawId: "0tracker",
          firstName: "",
          surname: "",
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
          throwNumber: 1,
          suddenDeathThrowNumber: 1,
          suddenDeathScore: 0
        }
      ],
      draw: [
        {
          id: 0,
          drawId: "0tracker",
          firstName: "",
          surname: "",
          totalScore: 0,
          suddenDeathScore: 0,
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
          throwNumber: 1,
          suddenDeathThrowNumber: 1
        }
      ],
      currentPlayer: 0,
      currentRound: 0,
      winner: "",
      addFirstName: "",
      addSurname: "",
      newId: 0,
      drawMessage: "",
      drawHidden: true,
      scoreboardHidden: false,
      showScoring: false,
      showAddPlayersButton: true,
      startButton: true,
      visibility: "none",
      scoringHidden: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event, state, numPlayers) {
    event.preventDefault();

    let firstName = this.state.addFirstName;
    let surname = this.state.addSurname;

    let newId = this.state.newId;
    if (newId === 0) {
      this.setState({
        players: [
          {
            id: newId,
            drawId: "0tracker",

            firstName: firstName,
            surname: surname,
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
            throwNumber: 1,
            suddenDeathScore: 0,
            suddenDeathThrowNumber: 1
          }
        ]
      });
      this.setState({ newId: newId + 1 });
      M.toast({
        html: "Player Added!",
        classes: "toastSuccess",
        displayLength: 1000
      });
      this.setState({ addFirstName: "", addSurname: "" });
    } else if (newId > 0) {
      this.setState(prevState => ({
        players: [
          ...prevState.players,
          {
            id: newId,
            drawId: "0tracker",

            firstName: firstName,
            surname: surname,
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
            throwNumber: 1,
            suddenDeathScore: 0,
            suddenDeathThrowNumber: 1
          }
        ]
      }));
      this.setState({ newId: newId + 1 });
      M.toast({
        html: "Player Added!",
        classes: "toastSuccess",
        displayLength: 1000
      });
      this.setState({ addFirstName: "", addSurname: "" });
    }
  }

  componentDidMount() {
    let playe = this.state.currentPlayer;
    let play = document.getElementById(playe);
    play.style.display = "block";
    M.AutoInit();
  }

  endGame() {
    let sorted = this.state.players.slice().sort((a, b) => {
      return b.totalScore - a.totalScore;
    });

    let playersDraw = [sorted[0]];
    for (var i = 1; i < sorted.length; i++) {
      console.log(sorted[i].drawId);
      if (sorted[0].totalScore === sorted[i].totalScore) {
        sorted[i].drawId = i + "tracker";

        playersDraw.push(sorted[i]);
        this.setState({
          draw: playersDraw,
          drawHidden: false
        });
        console.log("It Was A Draw! SUDDEN DEATH!", playersDraw);
        this.setState({ visibility: "none" });
      } else if (sorted[0].totalScore !== sorted[1].totalScore) {
        this.winner();
      }
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

  zeroPoints = () => {
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
    this.setState({ players });

    console.log(players[currentPlayer]);
    this.playerchange(currentPlayer, numPlayers, round);
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

    this.roundScore(1, currentPlayer, round, players);
    this.playerchange(currentPlayer, numPlayers, round);
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
    this.roundScore(3, currentPlayer, round, players);
    this.playerchange(currentPlayer, numPlayers, round);
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
    this.roundScore(5, currentPlayer, round, players);
    this.playerchange(currentPlayer, numPlayers, round);
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

    this.roundScore(7, currentPlayer, round, players);
    this.playerchange(currentPlayer, numPlayers, round);
  };

  playerchange(currentPlayer, numPlayers, round) {
    let nextPlayer = document.getElementById(currentPlayer + 1);
    let previousPlayer = document.getElementById(currentPlayer);
    let reset = document.getElementById(0);
    if (currentPlayer === numPlayers && round !== 10) {
      previousPlayer.style.display = "none";
      reset.style.display = "block";
      console.log("New Round");
      console.log(numPlayers);
      console.log(currentPlayer);
      console.log(round);
    } else if (currentPlayer === numPlayers && round === 10) {
      previousPlayer.style.display = "none";
      reset.style.display = "block";
      // call end game function here
      this.endGame();
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

  startGame = () => {
    this.setState({
      showScoring: true,
      showAddPlayersButton: false,
      startButton: false,
      visibility: "block"
    });
    // let vis = document.getElementById("vis");
    // vis.style.visibility = "visible";
  };

  render() {
    var show = {
      display: this.state.show ? "block" : "none"
    };

    var visibility = {
      display: this.state.visibility
    };

    return (
      <div className="bg" id="size">
        <div className="container">
          <div className="col s12">
            <h1>Axe Throwers Anonymous</h1>

            {!this.state.scoreboardHidden && (
              <Scoreboard players={this.state.players} />
            )}

            {this.state.showAddPlayersButton && (
              <a
                className="waves-effect waves-light btn modal-trigger addPlayers pulseSquare"
                href="#modal1"
              >
                Add Players
              </a>
            )}

            {this.state.startButton && (
              <div className="buttonContainer">
                {" "}
                <Button2 title={"Start Game!"} task={this.startGame} />
              </div>
            )}

            <div className="winnerbox" id="winnerbox">
              <h1>{this.state.winner}</h1>
            </div>

            <div id="modal1" className="modal">
              <div className="modal-content">
                {" "}
                <button className="btn-floating btn-small waves-effect waves-light red modal-close">
                  x
                  <i className="material-icons right" />
                </button>
                {/* <a className="btn-floating btn-small waves-effect waves-light red modal-close">
                  <i className="material-icons">x</i>
                </a> */}
                <h3 className="addPlayer">Add Players</h3>
                <form
                  className="form"
                  id="addPlayerForm"
                  onSubmit={this.handleSubmit}
                >
                  <br />
                  <br />

                  <span className="title">
                    {" "}
                    <label className="label">First Name</label>{" "}
                  </span>

                  <input
                    className="firstName"
                    type="text"
                    name="addFirstName"
                    value={this.state.addFirstName}
                    onChange={this.handleChange}
                    required
                  />

                  <span className="title">
                    {" "}
                    <label className="label">Surname</label>{" "}
                  </span>

                  <input
                    className="input"
                    type="text"
                    name="addSurname"
                    value={this.state.addSurname}
                    onChange={this.handleChange}
                    required
                  />

                  <button
                    className="waves-effect waves-light btn playerAdd"
                    type="submit"
                    name="action"
                  >
                    Add
                    <i className="material-icons right" />
                  </button>
                </form>
              </div>
            </div>

            {!this.state.drawHidden && <Draw players={this.state.draw} />}

            <ul id="vis" style={visibility}>
              {this.state.players.map(players => (
                <li
                  key={players.id}
                  id={players.id}
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
        </div>
      </div>
    );
  }
}
