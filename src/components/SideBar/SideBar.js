import React, { Component } from "react";
import "./SideBar.module.css";

import SideBarItems from "./SideBarItems/SideBarItems";

class SideBar extends Component {
  state = {
    style: {
      display: "none",
    },
  };
  MouseOverHandler = () => {
    this.setState({ style: null });
  };

  MouseOutHandler = () => {
    this.setState({
      style: {
        display: "none",
      },
    });
  };

  render() {
    return (
      <div className="SideBar">
        <SideBarItems
          Over={this.MouseOverHandler}
          out={this.MouseOutHandler}
          style={this.state.style}
        />
      </div>
    );
  }
}

export default SideBar;
