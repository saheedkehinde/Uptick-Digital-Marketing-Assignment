import React from "react";
import Pyramid from '../assets/pyramid.png'


const OurProcess = () => {
  return (
    <section className="bg-[#f6fbf8] py-30 h-full px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className=" md:text-5xl text-4xl font-bold text-emerald-900">
          How Can We Help You?
        </h2>
        <p className="text-gray-500 mt-8 text-2xl font-normal">
          Let's do great work together
        </p>

      <div className="mt-12 flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:justify-between relative">
  {/* Custom Dashed Line */}
  

  {/* Step 1 */}
  <div className="relative z-10 flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
      <span className="text-gray-400"> <img src={Pyramid} alt="" /></span>
      <div className="custom-dashed-line md:block hidden absolute"></div>
    </div>
    
    <p className="text-md font-semibold text-gray-900 mt-4 text-center">
      Update content <br /> on my Website
    </p>
  </div>

  {/* Step 2 */}
  <div className="relative z-10 flex flex-col items-center">
    <div className="w-8 h-8 rounded-full border border-gray-400 bg-white"></div>
    
    <p className="text-md font-semibold text-gray-500 mt-4 text-center">
      Improve User <br /> Experience
    </p>
  </div>

  {/* Step 3 */}
  <div className="relative z-10 flex flex-col items-center">
    <div className="w-8 h-8 rounded-full border border-gray-400  bg-white"></div>
    <p className="text-md font-semibold text-gray-500 mt-4 text-center">
      Request Free <br /> Website Review
    </p>
  </div>

  {/* Step 4 */}
  <div className="relative z-10 flex flex-col items-center">
    <div className="w-8 h-8 rounded-full border border-gray-400 bg-white"></div>
    <p className="text-md font-semibold text-gray-500 mt-4 text-center">
      Improve your <br /> SEO Rankings
    </p>
  </div>
</div>


        {/* See More Link */}
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
