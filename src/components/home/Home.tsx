import { HeroSection } from './HeroSection';
import { Worlds } from './World';
import { Scroll } from './Scroll';
import { Gridflex } from './Gridflex';
const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <div className='mb-5'>
    <Gridflex></Gridflex>
    </div>
    <div className='w-screen'>
        <Worlds/>
        <Scroll></Scroll>
    </div>
    </>
  )
}

export default Home