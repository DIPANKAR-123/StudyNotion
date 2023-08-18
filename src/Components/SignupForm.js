import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 
"react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./SignupForm.css" 
function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [formData,setFormData] =useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
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
        if (formData.password != formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
    
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
          ...formData,
        };
        console.log(accountData);
    
        navigate("/dashboard");
      }
    const [showPassword,setshowPassword] =useState(false);
    const [showPassword2,setshowPassword2] =useState(false);
    const [accountType,setaccountType] = useState("student");
    const finalData={
        ...formData,
        accountType
    }
    console.log(finalData);
  return (
    <div className='relative css1' >
        
        <div className='flex bg-richblack-800 p-1 my-3 rounded-full max-w-max gap-x-3'>
            <button className={`${accountType==='student'?"text-richblack-5 bg-richblack-900":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
              onClick={()=>{
                setaccountType("student");
            }}>Student</button>

            <button className={`${accountType==='instructor'?"text-richblack-5 bg-richblack-900":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{
                setaccountType("instructor");
            }}>Instructor</button>
        </div>

        <form action="" onSubmit={submitHandler}>
            <div className='flex justify-between gap-2'>
                <label htmlFor="">
                    <p  className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' type="text" required name="firstName" onChange={changeHandler} placeholder='Enter first name'  value={formData.firstName}/>
                </label>
                <label htmlFor="">
                    <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' type="text" required name="lastName" onChange={changeHandler} placeholder='Enter last name'  value={formData.lastName}/>
                </label>
            </div>
             
            <label htmlFor="">
                    <p  className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-1 ml-1'>Email address <sup className='text-pink-200'>*</sup></p>
                    <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] mb-1' type="email" required name="email" onChange={changeHandler} placeholder='Enter email'  value={formData.email}/>
            </label>

          

               <div className='flex flex-row justify-between '  >
                <label htmlFor="" className='relative '>
                    <p  className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Create Password <sup className='text-pink-200'>*</sup></p>
                    <input   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'type={showPassword?("text"):("password")}required name="password" onChange={changeHandler} placeholder='Enter password'  value={formData.password}/>

                    <span  className='absolute right-3 top-[47px] cursor-pointer'onClick={()=>setshowPassword((prev)=>!prev)}>
                         {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                     </span>
                </label>
                <label htmlFor="" className='relative'>
                    <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Confirm  Password <sup>*</sup></p>
                    <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' type={showPassword2?("text"):("password")} required name="confirmPassword" onChange={changeHandler} placeholder='Confirm password'  value={formData.confirmPassword}/>

                    <span  className='absolute right-3 top-[48px] cursor-pointer' onClick={()=>setshowPassword2((prev)=>!prev)}>
                         {showPassword2?(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                     </span>
                </label>
                </div>

                  <button  className='w-full bg-yellow-50 rounded -[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3  '>Create Account</button>

        </form>
    </div>
  )
}

export default SignupForm