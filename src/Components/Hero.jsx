import React, { useState } from 'react'
import hero from '../assets/hero.png'
import Logo from '../assets/Logo.png'


const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            
            <div className="flex-shrink-0 cursor-pointer">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 xl:space-x-12 text-white font-medium text-lg">
              <li className="hover:text-[#98AA28] transition-colors duration-300 cursor-pointer">
                Features
              </li>
              <li className="hover:text-[#98AA28] transition-colors duration-300 cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-[#98AA28] transition-colors duration-300 cursor-pointer">
                About
              </li>
              <li className="hover:text-[#98AA28] transition-colors duration-300 cursor-pointer">
                Contact Us
              </li>
            </ul>

            
            <div className="hidden lg:block">
              <a
                href="#"
                className="inline-block bg-[#98AA28] hover:bg-[#7a8a20] text-white font-semibold px-6 xl:px-8 py-3 xl:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Free Trial
              </a>
            </div>

           
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden p-2 text-white hover:text-[#98AA28] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#98AA28] focus:ring-opacity-50 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-[100vh] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
        }`}>
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-4 text-white text-center">
                <li className="py-2 hover:text-[#98AA28] transition-colors duration-300 cursor-pointer text-lg">
                  Features
                </li>
                <li className="py-2 hover:text-[#98AA28] transition-colors duration-300 cursor-pointer text-lg">
                  Pricing
                </li>
                <li className="py-2 hover:text-[#98AA28] transition-colors duration-300 cursor-pointer text-lg">
                  About
                </li>
                <li className="py-2 hover:text-[#98AA28] transition-colors duration-300 cursor-pointer text-lg">
                  Contact Us
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-block bg-[#98AA28] hover:bg-[#7a8a20] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src={hero} 
          alt="Hero background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-28 sm:pt-0">
        <div className="text-center text-white max-w-4xl mx-auto sm:bg-transparent rounded-xl p-4 sm:p-0
          md:mt-0
          mt-0
          flex flex-col items-center justify-center
          min-h-[60vh]
          sm:min-h-[70vh]
        ">
         
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-4">
              The Best
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className=" text-white ">
                Digital Marketing
              </span>
            </h1>
          </div>

        
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-200 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Completely synergize resource taxing relationships via premier niche markets. 
            Professionally cultivate one-to-one customer experiences.
          </p>

       
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block bg-[#98AA28] hover:bg-[#7a8a20] text-white font-semibold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full text-lg sm:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
