import React from 'react'
import Image from 'next/image'
import Men from '../images/desktop/image-interactive.jpg'
// import '../styles/globals.css'
function Desc() {
  return (
    <div>
      <div className='same_width relative'>
        <Image src={Men} alt={''} className="md:ml-4"></Image>
        <div className="absolute p-10 max-w-[30rem] h-96 bg-white top-[18rem] right-60 grid place-items-center">
          <span className='uppercase text-black text-4xl'>the leader in interactive vr</span>
          <span className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum, soluta vitae magni sapiente unde provident sint accusantium at tenetur enim labore neque cumque atque eos minus? Corrupti, perspiciatis enim.</span>
        </div>
      </div>
     
  

      {/* <div className='w-80 text-xl md:mt-60 flex flex-col justify-center bg-white w-96 h-72'>
        <div className='p-5'>
          <h1 className='font-bold text-center md:text-justify text-xl'>THE LEADER IN INTERACTIVE VR</h1>
          <div className=''>
            <p className='text-center md:text-lg w-72 text-xl md:text-justify ml-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at numquam exercitationem corporis velit rerum officiis fugiat dolore, 
          hic quisquam incidunt pariatur expedita praesentium sapiente.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Desc