import React from 'react'
import hero from '../assets/home.png'
const home = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center text-center pt-20 overflow-hidden max-w-5xl mx-auto mb-20'>
        <div style={{ backgroundColor: '#E9E3DF' }} className='w-30 h-30 rounded-full overflow-hidden flex items-center justify-center mb-4'>
            <img src={hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className='font-Ovo font-extralight text-lg'>Hi! I'm Muarij Shakeel 👋🏻</div>
        <div className='font-Ovo text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-4'>Code. Connect. Convert.</div>
        <div className='font-Ovo mt-4 text-sm sm:text-base md:text-lg lg:text-xl px-2'>I'm a computer science graduate from Lahore, <br /> having experience in development, artificial intelligence and sales.</div>
        <div className='mt-4 sm:mt-8 md:mt-12 lg:mt-20 space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 flex'>
            <button style={{ color: '#EEEEEE' }} className='bg-black rounded-4xl px-10 py-2'>
                LinkedIn
            </button>
            <button className='px-10 py-2 border-2 border-black rounded-4xl'>
                Connect
            </button>
        </div>
    </div>
  )
}

export default home