import React, { Component } from "react";
import Generator from "./generator/generator";
import Header from "./header/header";
import "../tailwind.min.css";
import "./home.scss";
import Footer from "./footer/footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColors: "dark",
      selectedFont: "Grandstander, cursive",
    };
  }

  toggleColors = () => {
    let { activeColors } = this.state;

    if (activeColors === "light") {
      this.setState({ activeColors: "dark" });
      return;
    } else if (activeColors === "dark") {
      this.setState({ activeColors: "light" });
      return;
    }
  };

  changeFont = (e) => {
    this.setState({ selectedFont: e.target.value });
  };

  render() {
    let { activeColors, selectedFont } = this.state;
    return (
      <div
        className={` ${
          activeColors === "light" ? `light-colors` : `dark-colors`
        } home-container`}
      >
        <Header set={this.toggleColors} activeColors={activeColors} />

        <div className="fonts-container">
          <label className="font-label">font</label>
          <select
            value={this.state.selectedFont}
            onChange={(e) => this.changeFont(e)}
            className="font-selector"
          >
            <option
              style={{ fontFamily: "Kumbh Sans, sans-serif" }}
              value="Kumbh Sans, sans-serif"
              className="option"
            >
              Kumbh Sans
            </option>

            <option
              style={{ fontFamily: "Grandstander, cursive" }}
              value="Grandstander, cursive"
              className="option"
            >
              Grandstander
            </option>

            <option
              style={{ fontFamily: "Anton, sans-serif" }}
              value="Anton, sans-serif"
              className="option"
            >
              Anton
            </option>

            <option
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
              value="Josefin Sans, sans-serif"
              className="option"
            >
              Josefin Sans
            </option>

            <option
              style={{ fontFamily: "Indie Flower, cursive" }}
              value="Indie Flower, cursive"
              className="option"
            >
              Indie Flower
            </option>
          </select>
        </div>
        <Generator font={selectedFont} />
        <Footer />
      </div>
    );
  }
}

export default Home;
