import React from 'react'
import ProfilePic from './images/LinkedinPP.jpeg'
import { MdFileDownload } from "react-icons/md";
import Resume from './images/resume.pdf';

function Hero() {
  return (
    <div id='Home' className='bg-blue-50 md:h-screen'>
        <div className='justify-around md:flex px-20 py-36 md:p-48'>
            <div className='flex justify-center md:order-last'>
                <img src={ProfilePic} alt="Profile Picture" className='w-[250px] md:w-[350px] rounded-full border-8 border-blue-500 shadow-2xl shadow-black' />
            </div>
            <div className='pt-8 pl-14 md:pt-16 md:pl-0' >
                <p className='text-2xl'>Hello, I'm</p>
                <p className='font-extrabold text-4xl md:text-6xl'>Anand Yelloju</p>
                <p className='font-semibold text-xl md:text-2xl pt-1 text-blue-600'>Fullstack Java Developer</p>
                <p className='text-3xl md:text-2xl pt-4 md:pt-6 pb-3'> Building the Web, One Pixel at a Time.</p>
                <button type="button" className='bg-gray-700 px-5 py-2 rounded-full text-lg tracking-widest text-white hover:font-bold mb-3 hover:bg-gray-900'>
                <a href={Resume} target="_blank" className='flex'> <MdFileDownload className='mr-1 mt-1.5'/> Resume </a>
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
