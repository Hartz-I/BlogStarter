import React, { Component } from "react";
import "./SideBarItem.module.css";

class SideBarItem extends Component {
  render() {
    return (
      <div className="SideBarItem">
        <div className="ItemLogo">
          <img src={this.props.logo} alt="icon" />
        </div>
        <div className="ItemTitle" style={this.props.style}>
          {this.props.itemName}
        </div>
      </div>
    );
  }
}

export default SideBarItem;
