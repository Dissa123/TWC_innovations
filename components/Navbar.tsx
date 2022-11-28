import React from 'react'
import Image from 'next/image';
import Logo from '../images/logo.svg'
import Link from 'next/link';
import {useState , useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const [color,setColor] =useState('transparent');
  const [textcolor,setTextColor] =useState('white');

  const handleNav =() =>{
    setNav(!nav)
  };
  
  // When I Scroll 
useEffect(()=>{
  const changeColor = ()=>{
    if(window.scrollY >=90){
      setColor('#ffffff')
      setTextColor('#00000')
    }else{
      setColor('transparent')
      setTextColor('#ffffff')
    }
  };
  window.addEventListener('scroll', changeColor)
},[]);


  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      {/* Logo */}
      <div className="max-w-[1240px] m-auto flex justify-between item-center p-4 text-white mt-10">
        <Link href='/'>
          <Image src={Logo} alt={''} className="" style={{color:`${textcolor}`}}></Image>
        </Link>
        {/* Nav bar text */}
        <ul className='hidden sm:flex'>
          <li className='p-4 font-bold'>
            <Link href='/'> About</Link>
          </li>
          <li className='p-4 font-bold'>
            <Link href='/'> About</Link>
          </li>
          <li className='p-4 font-bold'>
            <Link href='/'> Careers</Link>
          </li>
          <li className='p-4 font-bold'>
            <Link href='/'> Products</Link>
          </li>
          <li className='p-4 font-bold'>
            <Link href='/'> Support</Link>
          </li>
        </ul>

        {/* Mobile Buttons */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} style={{color:`${textcolor}`}}/>}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 
          "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black" : 
          "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black"} >
        <ul className=''>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/'> About</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/'> About</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/'> Careers</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/'> Products</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/'> Support</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar