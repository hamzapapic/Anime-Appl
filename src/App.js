import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Favorites from "./pages/Favorites/Favorites";
import { Router } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import OneAnime from "./pages/OneAnime/OneAnime";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar">{/* <Sidebar /> */}</div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/animepage" element={<AnimePage></AnimePage>}></Route>
        <Route path="/anime/:id" element={<OneAnime></OneAnime>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
