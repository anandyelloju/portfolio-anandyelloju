import React from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Portfolio from './images/Portfolio.png'

function Projects() {
  return (
    <div id='Projects' className='bg-blue-50 md:h-screen pb-4'>
      <p className='font-bold text-4xl text-center pt-20 pb-4 mb-2 shadow-2xl'>Projects</p>
      <div className='md:flex justify-center items-center gap-2'>
        <div className='bg-white my-14 mx-12 md:mx-px rounded-lg md:max-w-xs shadow-black shadow-2xl'>
            <img src={Portfolio} alt="Portfolio" className='md:w-[400px] border-gray-300 border-b-2 rounded-t-lg ' />
            <div className='p-6'>
                <p className='font-semibold text-2xl'>Anand.Dev | Portfolio</p>
                <p className='text-justify text-base py-3'>My portfolio project is a responsive website developed using HTML and Bootstrap, showcasing my skills, projects, and experiences.</p>
                <div className=' flex items-center justify-between px-2'>
                    <div className='flex gap-2'>
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?" alt="ReactJS" className='w-10' />
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?" alt="Tailwind" className='w-10' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <a href="https://github.com/AnandYelloju/myPortfolio" target='_blank'> <FaGithub className='text-3xl hover:text-[32px]'/> </a>
                        <a href="https://anandyelloju.github.io/myPortfolio/" target='_blank'> <AiOutlineCloudServer className='text-4xl hover:text-[38px]'/> </a>  
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white my-14 mx-12 md:mx-px rounded-lg md:max-w-xs shadow-black shadow-2xl'>
            <img src={Portfolio} alt="Portfolio" className='md:w-[400px] border-gray-300 border-b-2 rounded-t-lg ' />
            <div className='p-6'>
                <p className='font-semibold text-2xl'>Anand.Dev | Portfolio</p>
                <p className='text-justify text-base py-3'>My portfolio project is a responsive website developed using HTML and Bootstrap, showcasing my skills, projects, and experiences.</p>
                <div className=' flex items-center justify-between px-2'>
                    <div className='flex gap-2'>
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?" alt="ReactJS" className='w-10' />
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?" alt="Tailwind" className='w-10' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <a href="https://github.com/AnandYelloju/myPortfolio" target='_blank'> <FaGithub className='text-3xl hover:text-[32px]'/> </a>
                        <a href="https://anandyelloju.github.io/myPortfolio/" target='_blank'> <AiOutlineCloudServer className='text-4xl hover:text-[38px]'/> </a>  
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white my-14 mx-12 md:mx-px rounded-lg md:max-w-xs shadow-black shadow-2xl'>
            <img src={Portfolio} alt="Portfolio" className='md:w-[400px] border-gray-300 border-b-2 rounded-t-lg ' />
            <div className='p-6'>
                <p className='font-semibold text-2xl'>Anand.Dev | Portfolio</p>
                <p className='text-justify text-base py-3'>My portfolio project is a responsive website developed using HTML and Bootstrap, showcasing my skills, projects, and experiences.</p>
                <div className=' flex items-center justify-between px-2'>
                    <div className='flex gap-2'>
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?" alt="ReactJS" className='w-10' />
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?" alt="Tailwind" className='w-10' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <a href="https://github.com/AnandYelloju/myPortfolio" target='_blank'> <FaGithub className='text-3xl hover:text-[32px]'/> </a>
                        <a href="https://anandyelloju.github.io/myPortfolio/" target='_blank'> <AiOutlineCloudServer className='text-4xl hover:text-[38px]'/> </a>  
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white my-14 mx-12 md:mx-px rounded-lg md:max-w-xs shadow-black shadow-2xl'>
            <img src={Portfolio} alt="Portfolio" className='md:w-[400px] border-gray-300 border-b-2 rounded-t-lg ' />
            <div className='p-6'>
                <p className='font-semibold text-2xl'>Anand.Dev | Portfolio</p>
                <p className='text-justify text-base py-3'>My portfolio project is a responsive website developed using HTML and Bootstrap, showcasing my skills, projects, and experiences.</p>
                <div className=' flex items-center justify-between px-2'>
                    <div className='flex gap-2'>
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?" alt="ReactJS" className='w-10' />
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?" alt="Tailwind" className='w-10' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <a href="https://github.com/AnandYelloju/myPortfolio" target='_blank'> <FaGithub className='text-3xl hover:text-[32px]'/> </a>
                        <a href="https://anandyelloju.github.io/myPortfolio/" target='_blank'> <AiOutlineCloudServer className='text-4xl hover:text-[38px]'/> </a>  
                    </div>
                </div>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Projects
