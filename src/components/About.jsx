import React from 'react'

const About = () => {
  return (
    <div name= 'about' className='w-full h-screen bg-green-950 text-gray-300'>
<div classname='flex flex-col justify-center items-center w-full h-full'>
<div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
    </div>
    <div>
    </div>
    </div>
    <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold '>
            <p> Hi I am Ayub, nice to meet you</p>
        </div>
        <div className='text-md '>
            <p> I am a analytical thinker that thrives in team-oriented environments to solve complex issues with innovative solutions. Previous experience in IT and Cybersecurity helped fuel my ambition to learn new skills and further build upon those skills to support an industry leader.</p>
            <p className='py-4'> As someone who enjoys a variety of hobbies, I am a big fan of basketball, football, and soccer. I always look forward to catching a game and cheering on my favorite teams. Additionally, I am an avid gym-goer, as I believe that maintaining a healthy lifestyle is important. Spending time with my family and friends is also an essential part of my life, as I value the relationships I have with them. I am always on the lookout for new and emerging technologies, as I find it fascinating to learn about how these advancements can shape the future. </p>
        </div>
        <div>
            
        </div>
    </div>
</div>
</div>
    
  )
}

export default About