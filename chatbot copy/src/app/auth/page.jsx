import React from 'react'

export default function page() {
  return (
    <div>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <div>
            <input className='border m-10' type="email" placeholder='Enter Your Email'/>
            <input className='border m-10' type="password" placeholder='Password'/>
        </div>
        <p className='m-10'>don't have account? <a className="text-blue-700" href="">Create Account</a></p>
    </div>
  )
}
