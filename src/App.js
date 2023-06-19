import React from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage/AnimePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/animepage" element={<AnimePage></AnimePage>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
