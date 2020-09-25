import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import SidebarProfile from "./components/SidebarProfile";
import SidebarContentUpList from "./components/SidebarContentUpList";
import SidebarContentDownList from "./components/SidebarContentDownList";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="one">
          <div>
            <SidebarProfile />
          </div>
          <div className="hr"></div>
          <div className="sidebar-content-div">
            <SidebarContentUpList />
          </div>
          <div className="hr"></div>
          <div className="scrollStyle">
            <SidebarContentDownList />
          </div>
        </div>
        <div className="two">
          <Feed />
        </div>
        <div className="three">
          <p>Three</p>
        </div>
      </div>
    </div>
  );
}

export default App;
