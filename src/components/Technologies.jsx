import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { SiDjango, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiMysql,SiPython } from "react-icons/si";
// import {SiDjango} from "react-icons/si"
const Technologies = () => {
  return (
   <div className='border-b border-neutral-800 pb-24'>
  <h1 className='my-20 text-center text-4xl'>Technologies</h1>
  <div className='flex flex-wrap items-center justify-center gap-4'>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiHtml5 className='text-7xl text-orange-600' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiCss3 className='text-7xl text-blue-600' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiJavascript className='text-7xl text-yellow-400' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiBootstrap className='text-7xl text-purple-600' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <RiReactjsLine className='text-7xl text-cyan-400' />
    </div>
    
     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiPython className='text-7xl text-yellow-500' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiDjango className='text-7xl text-green-700' />
    </div>

    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiMysql className='text-7xl text-blue-700' />
    </div>


  </div>
</div>
  )
}

export default Technologies