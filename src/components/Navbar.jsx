import React, {useState} from 'react';
import {FaBars, FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import{HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/Ayublogo.jpg';
import {Link} from 'react-scroll';
import Ayub from '../assets/Ayub.png';
const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-green-950 text-gray-300 pb-5'>
<div>
    <img src={Ayub} alt="Logo Image" style={{width :'50px'}}/>
</div>
{/* Menu */}
    <ul className=' hidden md:flex'>
        <li>
        <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
        <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li>
        <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li>
        <Link  to="work"  smooth={true}  duration={500} >
          Projects
        </Link>
        </li>
        <li>
        <Link  to="contact"  smooth={true}  duration={500} >
          Contacts
        </Link>
        </li>
    </ul>
{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars/> : <FaTimes/>}
</div>
{/* Mobile EMnu */}
<ul className= {!nav ? 'hidden' :  'absolute top-0 left-0 w-full h-screen bg-green-950 flex flex-col justify-center items-center'}>
         <li className='py-6 text -4xl  '>
            {' '}
         <Link onClick={handleClick}   to="home"  smooth={true}  duration={500} >
          Home
        </Link>
         </li>
        <li className='py-6 text -4xl '>
        {' '}
        <Link onClick={handleClick}  to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className='py-6 text -4xl '>
        {' '}
        <Link  onClick={handleClick}  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li className='py-6 text -4xl '>
        {' '}
        <Link onClick={handleClick} to="projects"  smooth={true}  duration={500} >
          Projects
        </Link>
        </li>
        <li   className='py-6 text -4xl '>
        {' '}
        <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
</ul>
{/* Social Icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/ayub-egal-a46645222/"target="_blank" rel="noreferrer">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/egalayub" target="_blank" rel="noreferrer">
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="mailto:egalayub2@gmail.com"target="_blank" rel="noreferrer">
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://docs.google.com/document/d/1pbj0M5xLYeI3oLBR48xHNSIFDQrjOS8n0IdBooFkrKY/edit"target="_blank" rel="noreferrer" >
                Resume < BsFillPersonLinesFill size={30}/>
            </a>
        </li>
       
    </ul>
</div>
    </div>
  )
}

export default Navbar