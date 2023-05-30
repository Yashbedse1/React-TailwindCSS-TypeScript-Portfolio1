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
  return (
    <div className='w-full max-w-[1240px] mx-auto px-4'>
            <p className='text-4xl font-bold md:p-4'>Skills</p>
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-8 p-4'>
              <div className=' hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>HTML</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>CSS</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>JavaScript</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Typescript</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>React</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Vue</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Angular</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>NodeJS</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Rest} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Rest API'S</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Docker</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Kuber} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Kubernetes</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>AWS Services</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Post} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>PostgreSQL</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Net} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>.Net</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PHP} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>PHP</p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4 text-center font-bold'>Github</p>
              </div>
      </div>
    </div>
  );
};

export default Skills;