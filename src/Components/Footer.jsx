import React from 'react'
import Faceb from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Insta from '../assets/instagram.svg'
import Log from '../assets/Category.png'

const Footer = () => {
  return (
     <footer className="bg-white text-gray-600 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          
          <div className=" flex gap-3 mb-4">
            <img src={Log} alt="" />
            <h1 className="text-2xl font-bold text-gray-800">markethink</h1>
          </div>
          
          <p>
            Marketing is a company that focus on developing company’s strategy
            for increase digital marketing
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-9 h-9 bg-green-200 rounded-full flex items-center justify-center">
              <img src={Faceb} alt="" />
            </a>
            <a href="#" className="w-9 h-9 bg-green-200 rounded-full flex items-center justify-center">
              <img src={Twitter} alt="" />
            </a>
            <a href="#" className="w-9 h-9 bg-green-200 rounded-full flex items-center justify-center">
              <img src={Insta} alt="" />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing About</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Content Strategy</a></li>
            <li><a href="#" className="hover:underline">Content Development</a></li>
            <li><a href="#" className="hover:underline">Content Creation</a></li>
            <li><a href="#" className="hover:underline">Content Optimazion</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Site Map</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Notice</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
            <li><a href="#" className="hover:underline">Modern Slavery</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-10 text-center text-sm text-gray-500">
        © Copyright Marketthink. All right reserved
      </div>
    </footer>
  )
}

export default Footer