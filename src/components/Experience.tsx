import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience = ({ experienceData }: { experienceData: ExperienceData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [experienceData]);

  const currentExperience = experienceData[currentIndex];
  return (
    <div id="experience" className='flex flex-col justify-center items-center max-w-full w-full mt-auto mx-auto py-16 px-4 bg-[#0A375D] text-white'>
      <p className='text-4xl font-bold mb-4'>Experience</p>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <div className="flex justify-start">
            <button onClick={handlePreviousExperience}>
              <IoMdArrowDropleftCircle size={30} />
            </button>
          </div>
          <ul className='md:text-xl sm:text-md text-sm font-medium py-4 max-w-[1240px] border-black border-4 p-4'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6'>{currentExperience.title} - {currentExperience.company} {currentExperience.duration}</h1>
            {currentExperience.responsibilities.map((responsibility, responsibilityIndex) => (
              <li key={responsibilityIndex} className='pb-2'>
                <span className="color-black mr-2">&bull; </span>{responsibility}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <button onClick={handleNextExperience} >
              <IoMdArrowDroprightCircle size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
    
const mapStateToProps = (state: { experienceData: any; }) => {
  return {
    experienceData: state.experienceData,
  };
};
export default connect(mapStateToProps)(Experience);