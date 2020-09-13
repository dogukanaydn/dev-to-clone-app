import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import SidebarProfile from "./components/SidebarProfile";
import SidebarContentUpList from "./components/SidebarContentUpList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="one">
          <div>
            <SidebarProfile />
          </div>
          <div>
            <SidebarContentUpList />
          </div>
          <div>
            <p>SidebarContentDownList</p>
          </div>
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
