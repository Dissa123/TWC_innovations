import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.svg';
import fb from '../images/facebook.svg';
import pri from '../images/pinterest.svg';
import twitter from '../images/twitter.svg';

function Footer() {
  return (
    <div className='bg-black text-white text-center py-10 md:flex justify-around items-center'>
      <div className=''>
        <div className='flex justify-center md:flex justify-start'>
          <Image src={logo} alt={''}></Image>
        </div>

        <div>
          <ul className='mt-5 gap-x-32 md:flex gap-x-3'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>

      </div>


      <div>
        <ul className='flex justify-center md:flex justify-end gap-10 mt-8'>
          
          <li><Image src={fb} alt="fb" /></li>
          <li><Image src={pri} alt="printers" /></li>
          <li><Image src={twitter} alt="twitter" /></li>
        </ul>
        <p className="text-gray-400 mt-6">@2021 Loopstudios.All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer