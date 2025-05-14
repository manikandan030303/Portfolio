import { HERO_CONTENT } from '../constants/index';
import profilePic from '../assets/Media.jpg';
// import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Manikandan P
                    </h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Software Developer</span>
                    <p className='my-2 tracking-tight max-w-xl font-light'>{HERO_CONTENT}</p>
                    <a
                    href="/portfolio/Manikandan.pdf"
                    download="Manikandan.pdf"
                    className="mt-6 inline-block rounded-xl border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-800"
                    >
                    Download CV
                    </a>

                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center '>
                <img src={profilePic} className='border border-black rounded-[50%] ' alt="selva sathish" height={300} width={300} />
            </div>
            </div>

        </div>
    </div>
  )
}

export default Hero