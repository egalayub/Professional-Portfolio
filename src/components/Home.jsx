import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";
import Typed from 'react-typed'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-green-950'>
{/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-white'>Hi, my name is</p>
<h1 className='text-4xl sm:text-7xl font bold text-[#ccd6f6]'>Ayub Egal</h1>
<div >
<h2 className='text-4xl sm:text-7xl font bold text-[#8892b0]'>I am a </h2>
<Typed className='text-4xl sm:text-7xl font bold text-[#8892b0] pr-1' strings= {['Software Developer','Team Player','Java Developer','Learner','Critical Thinker']} typeSpeed={120} backSpeed={140} loop/>
</div>
<p className='text-[#8892b0] py-4 max-w-[700px]'>Junior developer with a passion for learning that is perfectly matched with a drive to succeed.
</p>

<div>
    <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black' >
     <Link  to="work"  smooth={true}  duration={500} >   View Projects </Link>
  
    <span className='group-hover:rotate-90 duuration-300'>
    <HiArrowNarrowRight className='ml-3'/>
   
    </span>
    </button>
</div>
    </div>
    </div>
  )
   
}


export default Home