import React, { useState } from 'react'
import hero from '../assets/hero.png'
import Logo from '../assets/Logo.png'


export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-full relative">
      {/* Navbar */}
      <nav className="nav bg-none pt-13 text-[1.1rem] flex justify-between items-center text-white absolute z-10 w-full px-5">
        <div className="cursor-pointer">
          <img src={Logo} alt="Icon Logo" />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Nav (Visible on md and up) */}
        <ul className="hidden md:flex space-x-10 font-medium cursor-pointer">
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className="hidden md:block">
          <a
            href="#"
            className="backdrop-blur bg-[#6b6f7079] text-white px-10 py-4 rounded-4xl cursor-pointer border border-[#76b3a4] hover:bg-[#5a8f7c] transition duration-300"
          >
            Free Trial
          </a>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#111111cc] text-white text-center py-6 z-20 space-y-6">
          <ul className="space-y-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 bg-[#98AA28] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#5a8f7c] transition duration-300"
          >
            Free Trial
          </a>
        </div>
      )}

      {/* Hero Texts */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 pb-60 -translate-y-1/2 font-semibold text-4xl text-center text-white">
        <h1>The Best</h1>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-300 text-white">
        <h1 className="text-8xl font-semibold pr-2 mb-13">Digital Marketing</h1>
      </div>

      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-50 text-center text-white">
        <p className="text-2xl font-normal text-[#e6e1e1af] mb-15">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer.
        </p>
        <a
          href="#"
          className="bg-[#98AA28] text-white font-semibold px-15 py-6 rounded-full text-2xl hover:bg-[#5a8f7c] transition duration-300"
        >
          Get Started
        </a>
      </div>

      {/* Background Image */}
      <img src={hero} alt="background" className="w-full h-auto object-cover" />
    </section>
  );
}