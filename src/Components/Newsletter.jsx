import React from 'react'
import Rectangle from '../assets/Rectangle 1.png'
import Image from '../assets/img.png'
import Group6 from '../assets/Group 618.png'

const Newsletter = () => {
  return (
     <section className="relative h-[50vh] w-[50] bg-cover bg-center bg-no-repeat  flex items-center justify-center px-4 sm:px-8 lg:px-16 mb-40  mt-30">
      
      <img src={Rectangle} alt=""/> 
      
        <div className=' absolute  h-[70vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-8 lg:px-16'> 
            <img src={Image} alt="" />
        </div>
      <div className="max-w-4xl w-full text-left text-white absolute z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Subscribe to get information, latest<br/>
          news and other interesting offers about
        </h2>

        <div className=" items-start justify-center gap-2 mt-7 mb-6">
          
          <img src={Group6} alt="" />
        </div>
    
        <form className="flex flex-col sm:flex-row items-start gap-20 mt-10">
          <input
            type="email"
            placeholder="Your email"
            className="px-6 py-3 w-full sm:w-[300px] rounded-full bg-white text-gray-800 placeholder:text-gray-600 shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-lime-400 to-lime-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter