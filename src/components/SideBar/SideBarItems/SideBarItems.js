import React from "react";

import SideBarItem from "./SideBarItem/SideBarItem";
import { NavLink } from "react-router-dom";

import browserIcon from "../../../assets/icons/fi-rr-browser.svg";
import homeIcon from "../../../assets/icons/fi-rr-home.svg";
import aboutIcon from "../../../assets/icons/fi-rr-info.svg";
import "./SideBarItems.module.css";

const sideBarItems = (props) => {
  const itemNames = {
    Posts: ["/", homeIcon],
    "New Post": ["/new-post", browserIcon],
    About: ["/", aboutIcon],
  };

  const items = Object.keys(itemNames).map((item) => {
    return (
      <NavLink to={itemNames[item][0]} key = {itemNames[item][1]}>
        <SideBarItem
          key={item}
          itemName={item}
          style={props.style}
          logo={itemNames[item][1]}
        />
      </NavLink>
    );
  });

  return <div className="SideBarItems">{items}</div>;
};

export default sideBarItems;
