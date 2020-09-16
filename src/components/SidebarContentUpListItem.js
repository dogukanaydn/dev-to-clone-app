import React from "react";

export default function SidebarContentUpListItem({ icon, name, value }) {
  return (
    <a href="#" className="sidebar-content">
      {icon}
      <p>{name}</p>
      {value ? (
        <div className="sidebar-content-rl">
          <span>{value}</span>
        </div>
      ) : (
        ""
      )}
    </a>
  );
}
