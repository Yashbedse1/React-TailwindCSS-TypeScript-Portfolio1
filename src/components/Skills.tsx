import React from 'react';
import HTML from '../assets/html.png';
import Angular from '../assets/angular.png';
import AWS from '../assets/aws.png';
import CSS from '../assets/css.jpg';
import Docker from '../assets/docker.png';
import Git from '../assets/git.png';
import Java from '../assets/javascript.png';
import Kuber from '../assets/kubernetes.png';
import Net from '../assets/net.png';
import Node from '../assets/node.png';
import PHP from '../assets/php.png';
import Post from '../assets/post.png';
import react from '../assets/react.png';
import Rest from '../assets/rest.png';
import Typescript from '../assets/typescript1.png';
import Vue from '../assets/vue.png';


const Skills = () => {
    const skillsData = [
      { image: HTML, text: 'HTML' },
      { image: CSS, text: 'CSS' },
      { image: Java, text: 'JavaScript' },
      { image: Typescript, text: 'TypeScript' },
      { image: react, text: 'ReactJs' },
      { image: Vue, text: 'VueJs' },
      { image: Angular, text: 'AngularJs' },
      { image: Node, text: 'NodeJs' },
      { image: Rest, text: 'Rest APIs' },
      { image: Docker, text: 'Docker' },
      { image: Kuber, text: 'Kubernetes' },
      { image: Post, text: 'PostgreSQL' },
      { image: AWS, text: 'AWS Services' },
      { image: Net, text: '.NET' },
      { image: PHP, text: 'PHP' },
      { image: Git, text: 'Github' },
    ];
  
    return (
      <div id="skills" className='flex flex-col justify-center items-center mx-auto mt-auto px-4 py-16 max-w-full bg-black text-white'>
        <p className='text-4xl font-bold md:p-4'>Skills</p>
        <div className='grid grid-cols-2 md:grid-cols-8 gap-16 p-4 max-w-full'>
          {skillsData.map((skill, index) => (
            <div key={index} className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={skill.image} alt={skill.text + ' icon'} />
              <p className='my-4 text-center font-bold'>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  