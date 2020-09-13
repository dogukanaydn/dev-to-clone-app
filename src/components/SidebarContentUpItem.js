import React from "react";
import { GiRead } from "react-icons/gi";

export default function SidebarContent(props) {
  return (
    <a href="#" className="sidebar-content">
      {props.icon}
      <p>{props.name}</p>
      <div className="sidebar-content-rl">
        <span>8</span>
      </div>
    </a>
  );
}
