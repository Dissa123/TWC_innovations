
import React from 'react'
import Image from 'next/image';
import Hero from './image-hero.jpg';
import Navbar from './Navbar';
function Welcome() {
  return (
    <section>
      <div className='w-full h-screen'>
        <div className='relative w-full h-full'>
          <Image src={Hero} alt={''} layout="fill" className='object-cover h-48 w-96'></Image>
        </div>
        {/* layout="fill" objectFit="cover" */}
        <nav className='text-white '>
          <div>
              <div className="flex justify-between items-center md:my-10 absolute text-2xl top-5 left-5 mx-40 ">
            <h3 className='absolute right-10 top-0 md:left-3'>loopstudios</h3>
            <div className='px-4 py-2 content-end cursor-pointer md:hidden'>
              {/* burgher icon */}
              <svg className="absolute w-6 left-36" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
          </div>

          <ul className='md:flex absolute text-sm top-5 right-5 gap-2 mr-40 my-10 hidden'>
            <li><a href="#"><span>About</span></a></li>
            <li><a href="#"><span>Career</span></a></li>
            <li><a href="#"><span>Events</span></a></li>
            <li><a href="#"><span>Products</span></a></li>
            <li><a href="#"><span>Support</span></a></li>
          </ul>
            
          </div>
        
        </nav>
        <div className='text-white flex items-start'>
          {/* <h1 className='absolute items-center w-50 left-1/1 text-xl md:absolute top-1/2 left-40 border-2 border-white-500 text-3xl w-1/3'>IMMERSIVE EXPERIENCES THAT DELIVER</h1> */}
          <h1 className='sm:text-white w-60 text-3xl md:left-1/4 absolute top-1/2 left-1/2 text-justify  transform -translate-x-1/2 -translate-y-1/2 border-2 border-white px-10 py-10 w-96 md:w-80'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </section>
  )
}

export default Welcome