import React from 'react'
import Image from 'next/image'
import Men from '../images/desktop/image-interactive.jpg'
// import '../styles/globals.css'
function Desc() {
  return (
    <section>
      <div className="men_img">
        <div className="box_content">
          <h1 className='p-8 text-4xl'>THE LEADER IN INTERACTIVE VR</h1>
          <p className='box_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta amet optio dolorum nihil excepturi fugit est officiis beatae ratione debitis quasi commodi iste deleniti nulla, eaque cumque dolorem illo?</p>
        </div>
          <Image src={Men} alt={''}></Image>

      </div>
    </section>
  )
}

export default Desc