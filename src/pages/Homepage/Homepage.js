import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="HomePage">
      <div className="home p30">
        <div className="flexy">
          <img
            src="https://spikesite2-17132.kxcdn.com/wp-content/uploads/Logo_symbol_512x512_Trans.png?format=webp"
            className="logo"
          />
          <h3 className="logoname">JOJO TV</h3>
        </div>
        <div className="searchcontainer">
          <input
            type="text"
            placeholder="Search anime..."
            className="homesearch"
          />
          <button className="searchbtn"></button>
        </div>
      </div>
    </div>
  );
}
