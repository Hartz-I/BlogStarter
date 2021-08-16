import React from "react";

import SideBarItem from "./SideBarItem/SideBarItem";

import "./SideBarItems.module.css";

const sideBarItems = (props) => {
  const itemNames = ["Home", "Contact", "About", "Ahnaf"];

  const items = itemNames.map((item) => {
    return <SideBarItem key={item} itemName={item} style={props.style} />;
  });

  return <div className="SideBarItems">{items}</div>;
};

export default sideBarItems;
