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
    <div className='text-black px-4 max-w-[1240px] mt-auto pt-40 w-full mx-auto text-left flex flex-col justify-center'>
      <p className='text-4xl font-bold '>Experience</p>
      {experienceData.map((experience, index) => (
        <div key={index} className=''>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6'>{experience.title} - {experience.company} {experience.duration}</h1>
          <div className='flex justify-left items-left'>
            <ul className='md:text-xl sm:text-md text-sm font-medium py-4'>
              {experience.responsibilities.map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex} className='pb-2'>{responsibility}</li>
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