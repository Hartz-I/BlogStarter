import React, { Component } from "react";
import "./SideBar.module.css";

import SideBarItems from "./SideBarItems/SideBarItems";

import arrow from "../../assets/icons/fi-rr-caret-right.svg";

class SideBar extends Component {
  state = {
    style: {
      display: "none",
    },
    titleStyle: null,
  };

  //controling hover manually
  MouseOverHandler = () => {
    this.setState({
      style: null,
      titleStyle: {
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        transform: "rotate(180deg)",
        height: "50px",
        width: "50px",
      },
    });
  };

  MouseOutHandler = () => {
    this.setState({
      style: {
        display: "none",
      },
      titleStyle: {
        height: "50px", //keeping the effect even after moving mouse out
        width: "50px",
      },
    });
  };

  render() {
    return (
      <div
        className="SideBar"
        onMouseOver={this.MouseOverHandler}
        onMouseOut={this.MouseOutHandler}
      >
        <p style={this.state.titleStyle}>
          <img src={arrow} alt="icon" />
        </p>
        <SideBarItems style={this.state.style} />
      </div>
    );
  }
}

export default SideBar;
