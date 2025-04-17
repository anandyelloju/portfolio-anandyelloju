import React, { useState } from 'react';
import { BsPersonBoundingBox } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full top-0 z-50 shadow-2xl'>
      <nav className='p-3 flex bg-white justify-around items-center'>
        <a href="#Home" id='brand' className='flex gap-3 items-center'>
            <BsPersonBoundingBox className='text-5xl text-blue-700'/>
            <span className='font-bold text-4xl'>Anand<span className='font-extrabold text-blue-700'>.</span>Dev</span>   
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8'>
            <a href="#Home" className='font-semibold text-xl hover:text-blue-700'>Home</a>
            <a href="#About" className='font-semibold text-xl hover:text-blue-700'>About</a>
            <a href="#Skills" className='font-semibold text-xl hover:text-blue-700'>Skills</a>
            <a href="#Experience" className='font-semibold text-xl hover:text-blue-700'>Experience</a>
            <a href="#Projects" className='font-semibold text-xl hover:text-blue-700'>Projects</a>
            <a href="#Connect" className='font-semibold text-xl hover:text-blue-700'>Connect</a>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className='md:hidden cursor-pointer' >
          {isOpen ? <IoIosClose className='text-gray-700 text-5xl' /> : <FiMenu className='text-gray-700 text-3xl' /> }  
        </button>
        
      </nav>
      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-8 py-8 bg-white ">
          <a href="#Home" className='block font-semibold text-2xl px-44 py-4 hover:bg-gray-300' onClick={toggleMenu}>Home</a>
          <a href="#About" className='block font-semibold text-2xl px-44 py-4 hover:bg-gray-300' onClick={toggleMenu}>About</a>
          <a href="#Skills" className='block font-semibold text-2xl px-44 py-4 hover:bg-gray-300' onClick={toggleMenu}>Skills</a>
          <a href="#Experience" className='block font-semibold text-2xl px-36 py-4 hover:bg-gray-300' onClick={toggleMenu}>Experience</a>
          <a href="#Projects" className='block font-semibold text-2xl px-40 py-4 hover:bg-gray-300' onClick={toggleMenu}>Projects</a>
          <a href="#Connect" className='block font-semibold text-2xl px-40 py-4 hover:bg-gray-300' onClick={toggleMenu}>Connect</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
