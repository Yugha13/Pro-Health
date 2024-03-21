import { HeroSection } from './HeroSection';
import { Worlds } from './World';
import { Scroll } from './Scroll';
const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <div className='w-screen'>
        <Worlds/>
        <Scroll></Scroll>
    </div>
    </>
  )
}

export default Home