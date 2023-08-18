import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 
"react-icons/ai";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
function LoginForm(props) {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();
    const [formData,setFormData] =useState({email:"",password:""});
    const [showPassword,setshowPassword] =useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
            {

                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }
  return (
    <form action="" onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        {/* <p>Hello ji</p> */}
        {/* { console.log("hiki")} */}
            {/* {console.log(isLoggedIn)} */}
            {/* {console.log("hanji logged in in login form ")} */}
        <label className='w-full' >
            <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Email Address <sub className='text-pink-200'>*</sub></p>
            <input type="email" required value={formData.email}  name="email" onChange={changeHandler} placeholder='Enter email id' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' />
        </label>

        <label className='w-full relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-1'>Password <sub className='text-pink-200'>*</sub></p>
            <input type={showPassword?("text"):("password")} required name="password" value={formData.password} onChange={changeHandler} placeholder='Enter password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'  />

            <span className='absolute right-3 top-[40px] cursor-pointer' onClick={()=>setshowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 textblue-100 w-full ml-auto max-w-max'>Forgot Password</p>
            </Link>

        </label>
            <button className='bg-yellow-50 rounded -[8px] font-medium text-richblack-900 px-[12px] py-[8px]  '>Sign In</button>
    </form>
  )
}

export default LoginForm