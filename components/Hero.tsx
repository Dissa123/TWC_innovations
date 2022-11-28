import React from 'react';
import Hero_textBox from './Hero_textBox';
import Navbar from './Navbar';

function Welcome() {
  return (
    <div className=''>
      <div className="bg-full_img hero-img h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed brightness-25">
        <div className='same_width'>
          <Navbar />
          <Hero_textBox/>
          
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Welcome