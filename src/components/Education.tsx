import React from 'react';

const Education = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto py-16 px-4 '>
      <p className='text-4xl font-bold '>Education</p>
      <div className=' grid md:grid-cols-2 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-black'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>MSc Advance Computer Science</h1>
          <p className=' md:text-2xl sm:text-xl text-lg font-bold py-2'>Oxford Brookes University</p>
          <ul className='md:text-lg sm:text-md text-sm font-medium '>
            <li className='pb-2'>1. Modules: Big Data & The Cloud, Advance Software Development, Data Science and Machine learning, Secure system architecture, Enterprise networking.</li>
            <li className='pb-2'>2. Software: SPSS, Docker and Kubernetes, Google cloud platform.</li>
            <li>3. Dissertation: Big Data Analysis for network traffic categorization and slicing.</li>
          </ul>
        </div>
        <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 border-black border-2'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Bachelor of Computer Engineering</h1>
          <p className='md:text-2xl sm:text-xl text-lg font-bold py-2 '>SPPU, India</p>
          <ul className='md:text-lg sm:text-md text-sm font-medium'>
            <li className='pb-2'>1. Relevant modules: Microprocessor Architecture, Software engineering, Smart system design and application, High performance computing, Design, and analysis of algorithm.</li>
            <li>2. Project: Employment Feedback by Securing Data Using anonymous authentication.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;