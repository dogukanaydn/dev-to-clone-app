import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import SidebarProfile from "./components/SidebarProfile";
import SidebarContent from "./components/SidebarContent";

function App() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="one">
          <SidebarProfile />
          <SidebarContent />
          <SidebarContent />
          <SidebarContent />
          <SidebarContent />
          <SidebarContent />
          <SidebarContent />
        </div>
        <div className="two">
          <p>Two</p>
        </div>
        <div className="three">
          <p>Three</p>
        </div>
      </div>
    </div>
  );
}

export default App;
