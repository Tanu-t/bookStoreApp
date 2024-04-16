// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const Signup = () => {
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div className="w-[600px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br></br>
        <input type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'></input>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br></br>
        <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'></input>
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br></br>
        <input type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'></input>
    </div>
    <div className='flex justify-around mt-4'>
        <button className='px-3 py-1 border bg-purple-500 text-white rounded-lg hover:bg-purple-700 duration-200'>Signup</button>
        <button className='cursur-pointer'
        onClick={()=> document.getElementById("my_modal_3").showModal()}
        >
        Have account?{" "} <span className='underline text-blue-500'>Login</span></button>
        <Login/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
