
import React from 'react'
import Image from 'next/image';
import Hero from './image-hero.jpg';
function Welcome() {
  return (
    <section>
      <div className="">
        <div >
          <Image src={Hero} alt={''} className='img'></Image>
        </div>

        <div className="nav">
          <div className="title">
            <h3 className='font-bold text-white pt-6'>loopstudios</h3>
          </div>
          <div className="nav_item text-white pt-6">
            <p>About</p>
            <p>Careers</p>
            <p>Events</p>
            <p>Contact</p>
          </div>
        </div>
        <h1 className='box_text text-white text'>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </section>
  )
}

export default Welcome