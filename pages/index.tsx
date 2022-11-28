import type { NextPage } from 'next'

import Welcome from '../components/Welcome';
import Desc from '../components/Desc';
import Cat from '../components/Cat';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="">
      <Welcome/>
      <Desc/>
      <Cat/>
      <Footer/>
    </div>
  )
}

export default Home
