import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { playerHand: null, dealerHand: null };
  }

  //supposed to fetch the json to allow me to display it on this page
  getHands(cards) {
    fetch("/api/game/new", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playerHand: cards,
      }),
    }).then(function (response) {
      return response.json();
    });
    this.props.action();
  }

  render() {
    return <div style={{ textAlign: "center" }}>This is the game</div>;
  }
}

export default Game;
