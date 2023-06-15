import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Favorites from "./pages/Favorites/Favorites";
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <AboutUs />
      {/* <Routes>
        <Route path="/anime-page" element={<AnimePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes> */}
    </>
  );
}
export default App;
