import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Banner from './images/Banner.png'
import LinkedinPP from './images/LinkedinPP.jpeg'
import GitHubPP from './images/GitHubPP.jpeg'

function Connect() {
  return (
    <div id='Connect' className='text-center bg-blue-50 pb-8 md:pb-6'> 
      <p className='font-bold text-4xl  pt-20 pb-4 mb-6 shadow-2xl'>Let's Connect</p>
      <div className='justify-center md:flex space-y-8 md:space-y-0 md:space-x-12 mx-14'>
        
        <div className='justify-around p-6 shadow-gray-800 shadow-xl bg-blue-500 rounded-md' >
          <div className='text-white pb-4'>
            <p className='flex font-bold  justify-center space-x-0.5'><span className='text-5xl'>Linked</span><FaLinkedin className='text-5xl' /></p>
            <p className='text-2xl'>Connect to Opportunity</p>
          </div>
          <div className='grid place-items-center'>
            <div className='relative'>
              <img src={Banner} alt="Cover Photo"
              className='w-[275px] rounded-t-3xl border-white border-[2px]' />
              <img src={LinkedinPP} alt="Profile Photo"
              className='w-[105px] rounded-full object-cover border-white border-[3px] absolute left-20 bottom-[-55px]' />
            </div>
            <div className='bg-white w-[275px] md:w-full rounded-b-3xl text-center pt-12 shadow-lg shadow-gray-800'>
              <div className='p-2'>
                <p className='font-bold text-2xl'>Anand Yelloju</p>
                <p className='font-semibold text-gray-500 text-sm'>Fullsatck Java Developer</p>
                <p className='text-sm'>Hyderabad, India</p>
              </div>
              <button className='bg-blue-500 px-5 py-2 rounded-full text-sm tracking-widest text-white hover:font-bold mb-3 hover:bg-blue-700'>
                <a href="https://www.linkedin.com/in/anandyelloju/" target="_blank" > Connect </a>
              </button>
            </div>
          </div>
        </div> 

        <div className='justify-around p-6 shadow-xl shadow-gray-800 bg-gray-900 rounded-md' >
          <div className='text-white pb-4'>
            <p className='flex font-bold  justify-center space-x-0.5'><FaGithubSquare className='text-5xl' /><span className='text-5xl'>GitHub</span></p>
            <p className='text-lg md:text-xl pt-1'>Build software better, together</p>
          </div>
          <div className='grid place-items-center'>
            <div className='relative'>
              <img src={Banner} alt="Cover Photo"
              className='w-[275px] rounded-t-3xl border-white border-[2px]' />
              <img src={GitHubPP} alt="Profile Photo"
              className='w-[105px] rounded-full object-cover border-white border-[3px] absolute left-20 bottom-[-55px]' />
            </div>
            <div className='bg-white w-[275px] md:w-full rounded-b-3xl text-center pt-12'>
              <div className='p-2'>
                <p className='font-bold text-2xl'>Anand Yelloju</p>
                <p className='font-semibold text-gray-500 text-sm'>Fullsatck Java Developer</p>
                <p className='text-sm'>Hyderabad, India</p>
              </div>
              <button className='bg-gray-700 px-5 py-2 rounded-full text-sm tracking-widest text-white hover:font-bold mb-3 hover:bg-gray-900'>
                <a href="https://github.com/AnandYelloju" target="_blank" > Follow </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
