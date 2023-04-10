import React, {useState} from 'react'
import {MdOutlineMenu, MdOutlineMenuOpen} from 'react-icons/md'

const Navbar = () => {
    const [nav, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!nav)
    }

    return (
        <div class='flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 class='w-full text-3xl font-bold text-[#35e1e3]'>REACT AVIATION</h1>
            <ul class='hidden md:flex'>
                <li class='p-4'>HOME</li>
                <li class='p-4'>SERVICES</li>
                <li class='p-4'>ABOUT</li>
                <li class='p-4'>CONTACT</li>
                <li class='p-4'>LOGIN</li>
            </ul>
            <div onClick={handleNavbar} class='display: block md:hidden'>
                {!nav ? <MdOutlineMenuOpen size={25}/> : <MdOutlineMenu size={25}/>}
                
            </div>
            <div class={!nav ? 'fixed left-0 top-0 w-[55%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%]'}>
            <h1 class='hidden md:flex w-full text-3xl font-bold text-[#35e1e3] m-4'>REACT AVIATION</h1>
                <ul className='pt-5 pl-1'>
                <li class='p-4 border-b border-white'>HOME</li>
                <li class='p-4 border-b border-white'>SERVICES</li>
                <li class='p-4 border-b border-white'>ABOUT</li>
                <li class='p-4 border-b border-white'>CONTACT</li>
                <li class='p-4 border-b border-white'>LOGIN</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar