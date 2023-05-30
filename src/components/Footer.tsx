import React from 'react';
import QR from "../assets/QR.png";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';


const Footer = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>MyPortfolio.</h1>
        <p className='md:text-xl sm:text-lg text-md font-bold py-4'>Feel free to connect with me on social media</p>
        <ul className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
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