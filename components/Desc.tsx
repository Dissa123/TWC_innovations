import React from 'react'
import Image from 'next/image'
import Men from '../images/desktop/image-interactive.jpg'
// import '../styles/globals.css'
function Desc() {
  return (
    <div className='md:grid grid-cols-2 flex items-center flex-col md:ml-32'>
      <div className='mt-20 px-10 md:my-20 ml-0 '>
        <Image src={Men} alt={''} className="md:ml-4"></Image>
      </div>

  

      <div className='w-80 text-xl md:mt-60 flex flex-col justify-center bg-white w-96 h-72'>
        <div className='p-5'>
          <h1 className='font-bold text-center md:text-justify text-xl'>THE LEADER IN INTERACTIVE VR</h1>
          <div className=''>
            <p className='text-center md:text-lg w-72 text-xl md:text-justify ml-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at numquam exercitationem corporis velit rerum officiis fugiat dolore, 
          hic quisquam incidunt pariatur expedita praesentium sapiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desc