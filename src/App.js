import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar">{/* <Sidebar /> */}</div>
      <AnimePage />
      <Footer />
    </div>
      {/* <Routes>
        <Route path="/manga" element={<Manga />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes> */}
    </>
  );
}
export default App;
