import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar">{/* <Sidebar /> */}</div>
      <AnimePage />
      <Footer />
    </div>
  );
}
export default App;
