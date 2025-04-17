import React from 'react'
import footerImg from './images/Footer.jpg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='justify-around shadow-2xl md:flex pb-4 px-6'>
      <div className='flex justify-center items-center md:order-last pt-8'>
        <img className='w-52 shadow-2xl rounded-md' src={footerImg} alt='Coding-Person' />
      </div>

      <div className='text-center pt-8'>
        <span className='font-serif text-4xl font-black '>Get in Touch</span>
        <p>Creating innovative solutions for a better future.</p>
        <div className='flex place-content-center space-x-3 text-3xl pt-10'>
        <a href='https://www.linkedin.com/in/anandyelloju/' target='_blank' className="hover:scale-110 hover:transition-all"> <FaLinkedin /></a>
        <a href='https://github.com/AnandYelloju/' target='_blank' className="hover:scale-110 hover:transition-all"> <FaGithubSquare /></a>
        </div>
        <p>Developed by Anand Yelloju.</p>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
      
      <div className='hidden md:block md:order-first pt-12'>
      <span className='text-lg font-bold'>Nav Links</span>
        <ul className='pl-2'>
          <li><a href='#Home'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Skils'>Skills</a></li>
          <li><a href='#Projects'>Projects</a></li>
        </ul>
      </div>

    </div>
    </>
  )
}

export default Footer
