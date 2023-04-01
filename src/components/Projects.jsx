import React from 'react'
import meals from '../assets/mbydad.jpg';
import myPet from '../assets/mypet.jpg';
import invader from '../assets/invaders.jpg';
import WorkImg from '../assets/towers.jpg';

const Projects = () => {
  return (
    <div name = 'work' className='w-ful md:h-screen text-gray-300 bg-green-950'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div className='pb-8 '>
    <p className='text-4xl font bold inline border-b-4 text-gray-300 border-white'>Projects</p>
    <p className='py-6'> Here are My Projects</p>
</div>
{/* container */}
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {/* Grid Item */}
    <div style={{backgroundImage: `url(${myPet})`}}
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Virtual Pet Shelter API
            </span>
            <div className='pt-8 text-center'>
                <span>
                    
                </span>
                <div>
                    <a href="https://github.com/egalayub/VirtualPetApi" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

            </div>
        </div>
    </div>


    <div style={{backgroundImage: `url(${invader})`}}
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
SpaceInvaders
            </span>
            <div className='pt-8 text-center'>
                <span>
                    
                </span>
                <div>
                    <a href="https://github.com/egalayub/SpaceInvaders"target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

            </div>
        </div>
    </div>
      {/* Grid Item */}
      <div style={{backgroundImage: `url(${meals})`}}
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
        Meals By Dads
            </span>
            <div className='pt-8 text-center'>
                <span>
                    
                </span>
                <div>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

            </div>
        </div>
    </div>


    
</div>
</div>

        </div>
   
  )
}

export default Projects