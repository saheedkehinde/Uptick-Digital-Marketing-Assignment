import React from 'react'
import hero from '../assets/hero.png'
import Logo from '../assets/Logo.png'


const Hero = () => {
  return (
    <section className=' h-full'>
        <nav className='bg-none pt-13 text-[1.1rem] flex justify-between items-center text-white absolute  z-10 p '>
              <div className='pl-30 pr-15 cursor-pointer'>
              <img src={Logo} alt="Icon Logo" />
              </div>
                 <ul className='flex space-x-10 text-white font-medium pl-40 pr-10 cursor-pointer'>
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
      
            </ul>
            <div className='pl-40 pr-5'>
            <a href='#' className='backdrop-blur  bg-[#6b6f7079] text-white px-10 py-4 rounded-4xl cursor-pointer border-1 border-[#76b3a4] hover:bg-[#5a8f7c] transition duration-300'>Free Trial</a>
          </div>
          </nav>

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 pb-60 -translate-y-1/2 font-semibold text-4xl text-center text-white '>
        <h1>The Best</h1>
      </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-300    text-white '>
        <h1 className='text-8xl font-semibold  pr-2 mb-13'>Digital Marketing</h1>
        </div>
          <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-50 text-center text-white'>
        <p className='text-2xl font-normal text-[#e6e1e1af] mb-15'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer.</p>
        <a href='#' className='bg-[#98AA28] text-white font-semibold px-15 py-6 rounded-full text-2xl hover:bg-[#5a8f7c] transition duration-300'>Get Started</a>
      </div>

      <img src={hero} alt="background" />
      
     
     
    
   
        

    </section>
  )
}

export default Hero