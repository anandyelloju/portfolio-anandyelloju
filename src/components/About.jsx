import React from 'react'

function About() {
  return (
    <div id='About' className='bg-blue-50 md:h-screen pb-4 scroll-smooth focus:scroll-auto'>
        <p className='font-bold text-4xl text-center pt-20 pb-4 mb-6 shadow-2xl'>About</p>
        <div className=' m-8 md:mx-32 md:my-24 rounded-lg'>
            <div className='bg-blue-200'>
                <p className='font-medium md:text-lg text-justify p-6'> &emsp; I am Anand Yelloju, a dynamic and driven Full Stack Developer and Java Developer based in Hyderabad, India. With over a year of hands-on experience, I have developed a robust skill set in creating dynamic and efficient web applications. My expertise spans various technologies and tools, enabling me to tackle innovative projects and deliver exceptional results.
                <br /> &emsp; I am passionate about full stack development and continuously seek to enhance my skills. I have a strong foundation in both back-end and front-end technologies, which allows me to build comprehensive and seamless web applications. Committed to continuous learning and driven to contribute meaningfully to every project, I have established myself as a valuable asset in the tech industry.</p>
            </div>
            <div>
                <div className='grid place-items-center md:flex bg-white shadow-xl shadow-gray-900 rounded-lg'>
                    <div className='w-[100px] md:w-[168px] mx-8 my-5'>
                        <img src="https://lh4.googleusercontent.com/proxy/05qauZRdftRNUrUTqBcayo40p_6nYcltkf9jk9fect8XZiMSX9lSHJib7AIdZRi6nxoOd5wENxr92wjJTeG4S4oQ4j7l" className='rounded-lg' />
                    </div>
                    <div className='block sm:hidden pb-4'>
                        <p className='font-semibold text-2xl'>Griet College, Hyderabad, India.</p>
                        <p className='font-semibold text-lg text-gray-500 pt-1'>B.Tech in CSE <span className='float-right pr-1.5'>2019 - 22</span></p>
                    </div>
                    <div className='hidden sm:block px-6 mb-8'>
                        <span className='font-bold text-gray-400'>Education</span>
                        <p className='font-semibold text-2xl'>Gokaraju Rangaraju Institute of Engineering & Technology College, Hyderabad, India.</p>
                        <p className='font-semibold text-lg text-gray-500 pt-1'>Bachelor of Technology in Computer Science <span className='float-right pr-1.5'>June 2019 - May 2022</span></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
