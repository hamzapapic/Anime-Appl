import React, { useState } from "react";
import "./Sidebar.css";
import { GiImbricatedArrows } from "react-icons/gi";
import { GiCrossedAirFlows } from "react-icons/gi";
import { SidebarData } from "./SidebarData";

// import { Link } from "react-router-dom";
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarOn = () => setSidebar(!sidebar);
  // console.log(sidebar);x
  return (
    <>
      <div className="sidebar">
        <a href="#" className="menu">
          <GiImbricatedArrows style={{ color: "pink" }} onClick={sidebarOn} />
        </a>
      </div>
      <nav className={sidebar ? "nav-active" : "nav"}>
        <ul
          className={sidebar ? "side-items-closed" : "side-items"}
          onClick={sidebarOn}
        >
          <li className="side-toggle">
            <a href="#" className="menu">
              <GiCrossedAirFlows style={{ color: "pink" }} />
            </a>
          </li>
          {SidebarData.map((element, index) => {
            return (
              <li key={index} className={element.className}>
                <a href={element.path}>
                  {element.icon}
                  <span>{element.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
