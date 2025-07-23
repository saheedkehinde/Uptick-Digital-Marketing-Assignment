import React from "react";
import Rect from '../assets/Rectangle 333.png'
import Rect1 from '../assets/Rectangle 334.png'
import Rect2 from '../assets/Rectangle 335.png'

const Articles = () => {
  return (
   <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">
          Read More Articles <br className="hidden sm:block" /> From Our Blog
        </h2>

        {/* Tabs */}
        <div className="flex space-x-8 mb-12">
          <span className="text-gray-900 font-semibold border-b-2 border-green-500 pb-1 cursor-pointer">
            Content Writing
          </span>
          <span className="text-gray-400 font-medium cursor-pointer">
            Content Marketing
          </span>
        </div>

        {/* Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start ">
          
          <div className="md:col-span-2 bg-white overflow-hidden">
            <img
              src={Rect} 
              alt="SEO"
              className="w-full h-70 object-cover"
            />
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-1">AUGUST 17, 2021</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                10 Reasons to invest in SEO copywriting services
              </h3>
              <button className="px-5 py-2 border-2 border-green-500 text-green-600 rounded-full text-sm font-medium hover:bg-green-50 transition-all">
                Read More
              </button>
            </div>
          </div>

          {/* Article 2 */}
          <div className="md:col-span-2 bg-white   overflow-hidden flex flex-col justify-between">
            <div>
              <img
                src={Rect1} 
                alt="Digital Marketing"
                className="w-full h-45 object-contain"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">AUGUST 17, 2021</p>
                <h3 className="text-md font-semibold text-gray-800">
                  How to get hired at a top Digital Marketing
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Agency life. We’ve all seen the photos posted on social media – the cool...
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-4">
              <span className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 hover:bg-green-50 cursor-pointer transition">
                👁
              </span>
            </div>
          </div>

          {/* Article 3 */}
          <div className="md:col-span-1 bg-white  rounded-md overflow-hidden flex flex-col justify-between">
            <div>
              <img
                src={Rect2}
                alt="Copywriting"
                className="w-full h-45 object-contain"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">AUGUST 17, 2021</p>
                <h3 className="text-md font-semibold text-gray-800">
                  Copywriting guidelines during the coronavirus
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Since the coronavirus hit earlier this year, it’s hard to go anywhere...
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-4">
              <span className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 hover:bg-green-50 cursor-pointer transition">
                👁
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;

