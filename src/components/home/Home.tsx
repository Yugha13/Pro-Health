import { Worlds } from './World';
import { Scroll } from './Scroll';
import { Gridflex } from './Gridflex';
const Home = () => {
  return (
    <>
    <div className='mb-5 w-screen h-screen grid place-items-center'>
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