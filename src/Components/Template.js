import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle } from 'react-icons/fc'
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0 h-screen'>
         
         <div className='w-11/12 max-w-[450px]' >
          <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] ' >{title}</h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br />
            <span className='text-blue-100 italic'>{desc2}</span>
          </p>
          {/* {console.log(formtype)} */}
        
          {/* {if(formtype === 'signup')} */}
          {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):(<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}
           
           <div className='flex w-full items-center  my-1 gap-x-2'>
            <div className='w-full h-[1px] bg-white '></div>
            <p className=' text-richblack-5 font-medium  leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-white '></div>
           </div>

           <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-3'>
            <FcGoogle></FcGoogle>
            <p>Sign Up with Google</p>
           </button>
         </div>

         <div className='relative w-11/12 max-w-[450px]'>
             <img src={frameImage} alt="pattern" width={550} height={504} loading='lazy'  className=''/>
             <img src={image} alt="pattern" width={550} height={504} loading='lazy'  className='absolute -top-4 right-4'/>
         </div>
    </div>
  )
}

export default Template