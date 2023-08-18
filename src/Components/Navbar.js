import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Toaster } from "react-hot-toast";

import toast from 'react-hot-toast'
function Navbar(props) {
    // const isLoggedIn=props.isLoggedIn;
    // const setIsLoggedIn=props.setIsloggedIn;
    // const [isLoggedIn,setIsLoggedIn] =useState(props.isLoggedIn);
         
    function check(){
        toast.success("hiji");
    }
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} />
        </Link>

        <nav>
            <ul className='text-white flex gap-x-6 text-xl'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* 4 button  */}
           {/* {check()} */}
           

           { console.log("hiki")}
            {/* {console.log(isLoggedIn)} */}
            {console.log("hanji logged in")}
             <div className="flex items-center gap-x-4 text-richblack-100">
        {!props.isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white"  >
              Login
            </button>
          </Link>
        )}
        {!props.isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              Sign Up
            </button>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                props.setIsLoggedIn(false);
                toast.success("Logout Sucessfully");
              }}
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white"
            >
              Log Out
            </button>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar