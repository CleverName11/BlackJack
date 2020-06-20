import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";
import { connect } from "react-redux";
import * as actions from "../actions";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  //checks that the user is logged in everytime the header is loaded
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div color="green">
            <Header />
            <Route path="/game" component={Game} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
