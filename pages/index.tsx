import type { NextPage } from 'next'

import Hero from '../components/Hero';
import Desc from '../components/VRsection';
import Cat from '../components/OurCreation';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero/>
      <Desc/>
      <Cat/>
      <Footer/>
    </div>
  )
}

export default Home
