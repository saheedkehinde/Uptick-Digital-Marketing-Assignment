import React from 'react'
import hero from '../assets/hero.png'
import Logo from '../assets/Logo.png'


const Hero = () => {
  return (
    <section className='h-full relative'>
  <nav className='bg-none pt-13 text-[1.1rem] flex justify-between items-center text-white absolute z-10 p-5 w-full flex-wrap'>
    <div className='pl-10 pr-5 cursor-pointer'>
      <img src={Logo} alt="Icon Logo" className='w-28 sm:w-24' />
    </div>

    <ul className='hidden lg:flex space-x-10 text-white font-medium pl-10 pr-10 cursor-pointer'>
      <li>Features</li>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>

    <div className='pl-5 pr-5'>
      <a href='#' className='backdrop-blur bg-[#6b6f7079] text-white px-6 py-2 sm:px-4 sm:py-2 rounded-4xl cursor-pointer border border-[#76b3a4] hover:bg-[#5a8f7c] transition duration-300 text-sm sm:text-xs'>
        Free Trial
      </a>
    </div>
  </nav>

  {/* Hero Title - Top Text */}
  <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-4xl text-center text-white sm:text-2xl'>
    <h1>The Best</h1>
  </div>

  {/* Hero Title - Main Text */}
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[60%] text-white'>
    <h1 className='text-8xl font-semibold pr-2 mb-13 sm:text-5xl sm:leading-tight'>Digital Marketing</h1>
  </div>

  {/* Hero Subtext and CTA */}
  <div className='absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-12 text-center text-white w-[90%] md:w-[60%]'>
    <p className='text-2xl font-normal text-[#e6e1e1af] mb-8 sm:text-base sm:leading-snug'>
      Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer.
    </p>
    <a href='#' className='bg-[#98AA28] text-white font-semibold px-10 py-4 rounded-full text-xl sm:text-base sm:px-6 sm:py-3 hover:bg-[#5a8f7c] transition duration-300'>
      Get Started
    </a>
  </div>

  {/* Background Image */}
  <img src={hero} alt="background" className='w-full h-screen object-cover' />
</section>

  )
}

export default Hero