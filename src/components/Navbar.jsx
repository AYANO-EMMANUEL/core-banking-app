import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='py-4 w-full'>
        <div className="wrapper max-w-[85%] mx-auto flex items-center justify-between">
            <h1 className="text-4xl font-bold ">core.</h1>

            <nav >
                <ul className='flex items-center gap-4'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'about'}>About</NavLink>
                    <NavLink to={'contact'}>Contact</NavLink>
                    <NavLink to={'termsofservice'}>Terms & Conditions</NavLink>
                </ul>
            </nav>

            <div>
                <a href="/signup">
                    <button className='bg-black px-5 py-2.5 text-white font-semibold rounded-lg'>Get Started</button>
                </a>
                <a href="/signup">
                    <button className='bg-none border-2 border-black ml-3 px-5 py-2.5 font-semibold rounded-lg text-black'>Login</button>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Navbar