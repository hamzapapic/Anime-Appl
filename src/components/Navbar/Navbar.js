import React from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flexy">
        <div className="sidebar">
          <Sidebar />
        </div>
        <a href="/">
          <img
            src="https://spikesite2-17132.kxcdn.com/wp-content/uploads/Logo_symbol_512x512_Trans.png?format=webp"
            className="logo"
          />
        </a>

        <h3 className="logoname">JOJO TV</h3>
      </div>
      <></>
    </div>
  );
}
