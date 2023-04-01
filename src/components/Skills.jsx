import React from 'react';
import git from '../assets/git.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import HTML from  '../assets/html.png';
import ReactImg from '../assets/react.png';
import Spring from '../assets/spring.png'
import GitHub from'../assets/github.png';
import Css from '../assets/css.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full  bg-green-950 text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600  '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className = 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={Css} alt="HTML icon" />
                <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={Java} alt="HTML icon" />
                <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={Spring} alt="HTML icon" />
                <p className='my-4'>Spring</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={git} alt="HTML icon" />
                <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname = "w-20 mx-auto" src={GitHub} alt="HTML icon" />
                <p className='my-4'>Github</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills