import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testtt = (e, value) => this.props.set(value);

  render() {
    let { activeColors } = this.props;
    return (
      <div className="header-container">
        <h1 className="logo">Quotes</h1>

        {activeColors === "light" ? (
          <Button variant="dark" onClick={this.testtt}>
            Dark mode
          </Button>
        ) : (
          <Button variant="light" onClick={this.testtt}>
            Light mode
          </Button>
        )}
      </div>
    );
  }
}

export default Header;
