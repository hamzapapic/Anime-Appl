import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <AnimePage />
    </>
  );
}
export default App;
