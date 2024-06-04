import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center  px-4 h-12'>
    <div className='font-bold text-lg'>Get me a Chai!</div>
      <ul className='flex justify-between gap-4 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
