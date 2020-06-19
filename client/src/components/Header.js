import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    //controls the content of the header based on auth
    switch (this.props.auth) {
      //don't show content when logging in or out
      case null:
        return;
      //show the log in button when logged out
      case false:
        return (
          <ul class="right hide-on-med-and-down">
            <li>
              <a class="waves-effect waves-light btn" href="/auth/google">
                Login with Google
              </a>
            </li>
          </ul>
        );
      //show basic buttons when logged in
      default:
        return (
          <ul class="right hide-on-med-and-down">
            <li>
              <a class="waves-effect waves-light btn" href="/api/game/new">
                New Game
              </a>
            </li>
            <li>
              <a class="waves-effect waves-light btn">Hit</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn">Stand</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn" href="/api/logout">
                Log out
              </a>
            </li>
          </ul>
        );
    }
  }

  //base of the header
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              <h5> Black Jack</h5>
            </a>
            {this.renderContent()}
          </div>
        </nav>
      </div>
    );
  }
}

//checks the state of the authentication
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
