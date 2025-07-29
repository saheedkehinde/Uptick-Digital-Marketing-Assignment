import React from "react";
import Pyramid from '../assets/pyramid.png'


const OurProcess = () => {
  return (
    <section className="bg-[#f6fbf8] py-30 h-full px-6">
      <div className="max-w-6xl mx-auto text-center">
      
        <h2 className=" md:text-5xl text-4xl font-bold text-emerald-900">
          How Can We Help You?
        </h2>
        <p className="text-gray-500 mt-8 text-2xl font-normal">
          Let's do great work together
        </p>

      <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0 w-full overflow-x-auto">
       
        <div className="flex flex-col items-center min-w-[150px]">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center">
            <span className="text-gray-400">
              <img src={Pyramid} alt="" className="w-10 h-10 md:w-8 md:h-8" />
            </span>
          </div>
          <p className="text-base md:text-md font-semibold text-gray-900 mt-4 text-center">
            Update content <br /> on my Website
          </p>
        </div>

      
        <div className="flex flex-col items-center min-w-[150px]">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-white"></div>
          <p className="text-base md:text-md font-semibold text-gray-500 mt-4 text-center">
            Improve User <br /> Experience
          </p>
        </div>

       
        <div className="flex flex-col items-center min-w-[150px]">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-white"></div>
          <p className="text-base md:text-md font-semibold text-gray-500 mt-4 text-center">
            Request Free <br /> Website Review
          </p>
        </div>

    
        <div className="flex flex-col items-center min-w-[150px]">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-white"></div>
          <p className="text-base md:text-md font-semibold text-gray-500 mt-4 text-center">
            Improve your <br /> SEO Rankings
          </p>
        </div>
      </div>


       
        <div className="mt-20">
          <a
            href="#"
            className="text-lime-600 text-2xl font-bold underline inline-flex items-center hover:text-lime-800"
          >
            See More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
