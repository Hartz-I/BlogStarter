import React, { Component } from "react";
import "./SideBar.module.css";

import SideBarItems from "./SideBarItems/SideBarItems";

// import arrow from "../../assets/icons/fi-rr-caret-right.svg";

class SideBar extends Component {
  state = {
    style: {
      display: "none",
    },
    titleStyle: null,
    iconStyle: null,
  };

  //controling hover manually
  MouseOverHandler = () => {
    this.setState({
      style: null,
      titleStyle: {
        backgroundColor: "rgb(14, 71, 177)",
        borderRadius: "5px",
        color: "black",
        transform: "rotate(180deg)",
        height: "50px",
        width: "50px",
      },
      iconStyle: {
        fill: "white",
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
      iconStyle: {
        fill: null,
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
          <svg
            id="Outline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>174 arrow small right</title>
            <path
              style={this.state.iconStyle}
              d="M9,17.879V6.707A1,1,0,0,1,10.707,6l5.586,5.586a1,1,0,0,1,0,1.414l-5.586,5.586A1,1,0,0,1,9,17.879Z"
            />
          </svg>
        </p>
        <SideBarItems style={this.state.style} />
      </div>
    );
  }
}

export default SideBar;
