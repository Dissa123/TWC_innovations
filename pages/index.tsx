import type { NextPage } from 'next'

import Welcome from '../components/Welcome';
import Desc from '../components/Desc';
import Cat from '../components/Cat';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Welcome/>
      <Desc/>
      <Cat/>
      <Footer/>
    </div>
  )
}

export default Home
