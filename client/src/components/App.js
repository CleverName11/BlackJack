import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";
import { connect } from "react-redux";
import * as actions from "../actions";
import "materialize-css/dist/css/materialize.min.css";

const Landing = () => <h2>Welcome to BlackJack</h2>;
const HomePage = () => <h2>HomePage</h2>;
const NewGame = () => <h2>NewGame</h2>;
const GameOver = () => <h2>GameOver</h2>;
const record = () => <h2>Wins and Losses</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div color="green">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={HomePage} />
            <Route path="/api/game" component={Game} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
