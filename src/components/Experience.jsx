import React from 'react'

function Experience() {
  return (
    <div id='Experience' className='bg-blue-50 md:h-screen'>
      <p className='font-bold text-4xl text-center pt-20 pb-4  mb-6 shadow-2xl'>Experience</p>
      <div>
        <div className='relative border-l-4 border-blue-800 pl-8 pb-6 mx-24 lg:mx-80'>
            <div class="absolute -left-3 top-1/3 h-5 w-5 rounded-full bg-blue-900"></div>
            <div className='grid place-items-center md:flex bg-white shadow-xl shadow-gray-900 rounded-lg'>
                <div className='w-[125px] md:w-[168px]'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png" alt="Cognizant" className='rounded-lg' />
                </div>
                <div className='block sm:hidden pb-4'>
                    <p className='font-semibold text-2xl'>PAT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hyd, In.</p>
                    <p className='font-semibold text-lg text-gray-500 pt-1'>CTS <span className='float-right pr-1.5'>2022 - 23</span></p>
                </div>
                <div className='hidden sm:block px-4'>
                    <p className='font-semibold text-xl'>Programmer Analyst Tainee <span className='float-right text-lg text-gray-500 pr-1.5'>Hyderabad, India.</span></p>
                    <p className='font-semibold text-md text-gray-500 pt-1'>Cognizant Technology Solutions <span className='float-right pr-1.5'>March 2022 - May 2023</span></p>
                    <p className='text-md pt-4 '>- Developed Microservice with RESTful APIs using Spring Boot and Hibernate frameworks. <br />
                    - Experienced in writing unit tests for code coverage using JUnit and Mockito.</p>
                </div>
            </div>
        </div>
        <div className='relative border-l-4 border-blue-800 pl-8 pb-6 mx-24 lg:mx-80'>
            <div class="absolute -left-3 top-1/3 h-5 w-5 rounded-full bg-blue-900"></div>
            <div className='grid place-items-center md:flex bg-white shadow-xl shadow-gray-900 rounded-lg'>
                <div className='w-[125px] md:w-[168px] p-3 md:p-5'>
                    <img src="https://sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png" alt="Cognizant" className='rounded-lg' />
                </div>
                <div className='block sm:hidden pb-4'>
                    <p className='font-semibold text-2xl'>Intern &nbsp; &nbsp; &nbsp; Hyd, In.</p>
                    <p className='font-semibold text-lg text-gray-500 pt-1'>AICTE <span className='float-right pr-1.5'>2021</span></p>
                </div>
                <div className='hidden sm:block px-4'>
                    <p className='font-semibold text-xl'>Intern <span className='float-right text-lg text-gray-500 pr-1.5'>Hyderabad, India.</span></p>
                    <p className='font-semibold text-md text-gray-500 pt-1'>All India Council for Technical Education <span className='float-right pr-1.5'>Oct 2021 - Dec 2021</span></p>
                    <p className='text-md pt-4 '>- Trained in AI and ML as part of a virtual internship program in EduSkills [AICTE]. <span className='text-transparent'>[AICTE]</span>  <br />
                    - Successfully passed the given assessment and completed the course.</p>
                </div>
            </div>
        </div>
        <div className='relative border-l-4 border-blue-800 pl-8 pb-6 mx-24 lg:mx-80'>
            <div class="absolute -left-3 top-1/3 h-5 w-5 rounded-full bg-blue-900"></div>
            <div className='grid place-items-center md:flex bg-white shadow-xl shadow-gray-900 rounded-lg'>
                <div className='w-[125px] md:w-[168px]'>
                    <img src="https://thumbs.dreamstime.com/b/letter-sp-logo-colorful-splash-background-combination-design-creative-industry-web-business-company-203786574.jpg" alt="Cognizant" className='rounded-lg' />
                </div>
                <div className='block sm:hidden pb-4'>
                    <p className='font-semibold text-2xl'>Intern &nbsp; &nbsp; &nbsp; Hyd, In.</p>
                    <p className='font-semibold text-lg text-gray-500 pt-1'>SPT <span className='float-right pr-1.5'>2018 - 19</span></p>
                </div>
                <div className='hidden sm:block px-4'>
                    <p className='font-semibold text-xl'>Intern <span className='float-right text-lg text-gray-500 pr-1.5'>Hyderabad, India.</span></p>
                    <p className='font-semibold text-md text-gray-500 pt-1'>SP Technologies <span className='float-right pr-1.5'>Dec 2018 - April 2019</span></p>
                    <p className='text-md pt-4 '>- Involved in Android application development as part of the industrial training program. <br/>
                    - Developed an app for Tourism use-case.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
