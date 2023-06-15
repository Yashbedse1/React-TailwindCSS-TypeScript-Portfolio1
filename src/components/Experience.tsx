import React from 'react';
import { connect } from 'react-redux';

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience = ({ experienceData }: { experienceData: ExperienceData[] }) => {

  return (
    <div id="experience" className='flex flex-col justify-center items-center max-w-full w-full mt-auto mx-auto py-16 px-4 bg-[#0A375D] text-white'>
      <p className='text-4xl font-bold p-4'>Experience</p>
      {experienceData.map((experience, index) => (
        <div key={index} className='max-w-[1240px]'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6'>{experience.title} - {experience.company} {experience.duration}</h1>
          <div className='flex justify-left items-left'>
            <ul className='md:text-xl sm:text-md text-sm font-medium py-4'>
              {experience.responsibilities.map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex} className='pb-2'>
                   <span className="color-black mr-2">&bull; </span>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: { experienceData: any; }) => {
  return {
    experienceData: state.experienceData,
  };
};
export default connect(mapStateToProps)(Experience);