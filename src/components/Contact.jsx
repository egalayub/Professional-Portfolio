import React from 'react'

const Contact = () => {
  return (
    <div name ='contact' className='w-full h-screen bg-green-950 flex justify-center items-center p-4'>
        <form method = 'POST' action='https://getform.io/f/efdedfba-1696-4b30-bfd8-7c7ee8d2fc0c' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold imline border-b-4 border-white text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 '> Submit the form below or you can send me an email - egalayub2@gmail.com</p>
            </div>
            <input  className=' bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='Email' />
            <textarea classname ='bg-[#ccd6f6] p-2' name="messaage"  rows="10" placeholder='Message'></textarea>
           <button className='text-white  border-2 px-6 py-3 my-8 mx-auto flex items-center hover:bg-white hover:border-white hover:text-black'>Let's Work</button>
        </form>

    </div>
  )
}

export default Contact