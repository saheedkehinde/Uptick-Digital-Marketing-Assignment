import React from "react";
import Group from "../assets/Group.png";
import Pyramid from "../assets/pyramid.png";
import Ball from "../assets/wool-ball.png";
import Glass from "../assets/glass.png";
import Laptop from "../assets/laptop.png";

const StrategicSection = () => {
  return (
    <section className="px-10 py-35 mx-8 bg-white text-emerald-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-5xl md:text-5xl font-extrabold text-emerald-950 leading-snug">
            We’re Strategic Digital <br /> Marketing Agency
          </h2>
          <p className="text-gray-500 mt-6 text-xl font-normal py-7  w-[22rem] leading-relaxed">
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all made, have
            spare to negatives
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center text-2xl  text-[#A3B938] font-bold underline hover:text-green-900"
          >
            See More
            <span className="ml-1 p-3">→</span>
          </a>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         
          <div>
            <div className="mb-3">
              <img src={Group} alt="Rectangle-box" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Content Strategy
            </h4>
            <p className="text-xl text-gray-500 mt-2 font-normal w-[15rem] leading-relaxed">
              All our content marketing service packages include a custom
              content strategy
            </p>
          </div>

          
          <div>
            <div className="mb-3">
                <img src={Pyramid} alt="Pyramid" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Content Development
            </h4>
            <p className="text-xl text-gray-500 mt-2 font-normal w-[15rem] leading-relaxed">
              We create some content calendar for your company’s must-share
              content
            </p>
          </div>

          
          <div>
            <div className="mb-3">
                <img src={Ball} alt="Wool Ball" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Content Creation
            </h4>
            <p className="text-xl text-gray-500 mt-2 font-normal w-[15rem] leading-relaxed">
              Experienced in copywriting and marketing team begins creating
              content
            </p>
          </div>

          
          <div>
            <div className="mb-3">
                <img src={Glass} alt="Glass" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Content Optimization
            </h4>
            <p className="text-xl text-gray-500 mt-2 font-normal w-[15rem] leading-relaxed">
              Your content marketing management services also include SEO
            </p>
          </div>
        </div>
      </div>

      <section className="px-8 py-20 bg-white mt-12 text-emerald-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40  items-center">
        
        
         
          <div className=" w-max-fit md:h-max- mr-20  ">
            <img src={Laptop} className="h-[20rem] w-[30rem] object-cover border-2" loading="lazy"/>
            
          </div>
        

       
        <div className="text-center  md:text-left">
          <h2 className="text-5xl md:text-5xl font-bold text-emerald-950 mb-12 leading-snug">
            Increase Business on <br /> Social Media Reach
          </h2>
          <p className="text-xl text-gray-500 mt-2 mb-3 font-normal w-[25rem] leading-relaxed">
            Using our network of industry influencers, <br className="hidden md:block" />
            we help promote your content
          </p>
          <button className="mt-8 px-15 py-7 rounded-full font-bold text-2xl text-white bg-gradient-to-r from-[#D6FF7E] to-[#98AA28] hover:brightness-105 shadow-lg transition leading-relaxed">
            Get Started
          </button>
        </div>
      </div>
    </section>
    </section>

    

    
  );

};


export default StrategicSection;
