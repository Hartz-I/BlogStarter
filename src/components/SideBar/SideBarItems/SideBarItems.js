import React from "react";

import SideBarItem from "./SideBarItem/SideBarItem";

import "./SideBarItems.module.css";

const sideBarItems = (props) => {
  const itemNames = ["Home", "Contact", "About"];

  const items = itemNames.map((item) => {
    return (
      <SideBarItem
        itemName={item}
        over={props.over}
        out={props.out}
        style={props.style}
      />
    );
  });

  return <div className="SideBarItems">{items}</div>;
};

export default sideBarItems;
