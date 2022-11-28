import React from 'react'
import Image from 'next/image'
import earth from '../images/desktop/image-deep-earth.jpg';
import fish from '../images/desktop/image-fisheye.jpg';
import ifa from '../images/desktop/image-from-above.jpg';
import ig from '../images/desktop/image-grid.jpg';
import interactive from '../images/desktop/image-interactive.jpg';
import ina from '../images/desktop/image-night-arcade.jpg';
import ipb from '../images/desktop/image-pocket-borealis.jpg';
import ist from '../images/desktop/image-soccer-team.jpg';
function Cat() {
  return (
    <div className=''>
      <div className=''>
        <div className='text-center mt-20 flex justify-around mt-60'>
          <h1 className='text-2xl'>OUR CREATIONS</h1>
          <button className='rounded-none border-2 border-neutral-900 p-1 px-3'>SEE MORE</button>
        </div>
      </div>

      <div className='md:same_width md:grid md:grid-cols-3'>
        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={earth} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={ist} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={fish} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={ifa} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={ig} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={interactive} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

        <div>
          <div className='relative my-10'>
            <div className='mx-5'>
              <Image src={ina} alt={''} className="w-full h-32 sm:h-48 object-cover" />
              <p className='absolute text-2xl text-white bottom-5 left-8'>DEEP EATH</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cat