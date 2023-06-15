import React from 'react';
import QR from "../assets/QR.png";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaMailBulk
} from 'react-icons/fa';

const Footer = () => {
  return (
    
    <div className='grid lg:grid-cols-3 gap-8 max-w-full mx-auto py-16 px-4 text-white bg-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>MyPortfolio.</h1>
        <p className='md:text-xl sm:text-lg text-md font-bold py-4'>Feel free to connect with me on social media</p>
        <ul className='flex justify-between md:w-[75%] my-6'>
          <a href="https://www.linkedin.com/in/yash-bedse/">
          <FaLinkedin size={30} />
          </a>
            <FaTwitterSquare size={30} />
            <a href="https://github.com/Yashbedse1">
            <FaGithubSquare size={30} />
            </a>
            <FaMailBulk size={30} title='bedseyash56@gmail.com'> </FaMailBulk>
        </ul>
      </div>
      <div className='lg:col-span-2 flex flex-col justify-center mt-3'>
      <img className='w-[150px] mx-auto my-4' src={QR} alt='/' />
      <p className='flex flex-col justify-between items-center font-bold'>Scan the QR code and feel free to connect me on LinkedIn</p>
      </div>
    </div>
  );
};

export default Footer;