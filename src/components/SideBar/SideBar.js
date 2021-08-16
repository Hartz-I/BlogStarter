import React, { Component } from "react";
import "./SideBar.module.css";

import SideBarItems from "./SideBarItems/SideBarItems";

class SideBar extends Component {
  state = {
    style: {
      display: "none",
    },
    titleStyle: null,
  };
  MouseOverHandler = () => {
    this.setState({
      style: null,
      titleStyle: {
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        transform: "rotate(180deg)",
      },
    });
  };

  MouseOutHandler = () => {
    this.setState({
      style: {
        display: "none",
      },
      titleStyle: {
        color: "white",
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
        <p style={this.state.titleStyle}>Title</p>
        <SideBarItems style={this.state.style} />
      </div>
    );
  }
}

export default SideBar;
