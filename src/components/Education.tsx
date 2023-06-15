import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: 'MSc Advance Computer Science',
      institution: 'Oxford Brookes University',
      modules: [
        'Modules: Big Data & The Cloud, Advance Software Development, Data Science and Machine learning, Secure system architecture, Enterprise networking.',
        'Software: SPSS, Docker and Kubernetes, Google cloud platform.',
        'Dissertation: Big Data Analysis for network traffic categorization and slicing.'
      ]
    },
    {
      title: 'Bachelor of Computer Engineering',
      institution: 'SPPU, India',
      modules: [
        'Relevant modules: Microprocessor Architecture, Software engineering, Smart system design and application, High performance computing, Design, and analysis of algorithm.',
        'Project: Employment Feedback by Securing Data Using anonymous authentication.'
      ]
    }
  ];

  return (
    <div id="education" className='flex flex-col justify-center items-center w-full max-w-full mx-auto mt-auto py-16 px-4 bg-[#0A375D] text-white'>
      <p className='text-4xl font-bold p-4'>Education</p>
      <div className='max-w-[1240px] grid md:grid-cols-2 gap-8'>
        {educationData.map((education, index) => (
          <div
            key={index}
            className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 border-black border-2 border-l-8'
          >
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>{education.title}</h1>
            <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>{education.institution}</p>
            <ul className='md:text-lg sm:text-md text-sm font-medium'>
              {education.modules.map((module, moduleIndex) => (
                <li key={moduleIndex} className='pb-2'>
                   <span className="color-black mr-2">&bull; </span>
                   {module}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
