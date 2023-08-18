import "./App.css";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <div className="w-screen h-screen  bg-richblack-900 flex flex-col  " >
      
      <Navbar className="" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } ></Route>
      </Routes>
    </div>
  );
}

export default App;
