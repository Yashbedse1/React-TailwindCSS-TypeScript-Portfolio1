import React from 'react';
import Typed from 'react-typed';
import Stack from '../assets/devv.jpg';

const Hero = () => {
  return ( 
    <div id="hero" className='text-white'>
      <div 
      style={{ backgroundImage: `url(${Stack})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' }}
      className='flex flex-col justify-center text-center mx-auto h-screen max-w-full w-full'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Yash Bedse 
        </h1>
        <p className='md:text-2xl text-xl font-bold p-2'>
        "Highly skilled Full Stack Engineer with a passion for creating scalable web applications and working across the globe. Holding extensive experience working with React, TypeScript, PostgreSQL, Node.js, PHP and HTML, CSS. Currently, looking for an opportunity to apply my skills and knowledge and take on new challenges to build cutting-edge solutions from the ground up."
        </p>
       
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-lg font-bold py-4'>
            Having experience working as a 
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-lg font-bold md:pl-4 pl-2'
            strings={['Junior Software Engineer', 'Junior Developer', 'Full Stack Engineer']}
            typeSpeed={90}
            backSpeed={90}
            loop
          />
        </div>
        <button className='bg-black hover:bg-[#ff0000] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white'>
        <a href="/CV.pdf" download>Download CV</a></button>
      </div>
    </div>
  );
};

export default Hero;