import React from 'react';
import Group1 from '../assets/icons/Group 502.png';
import Group2 from '../assets/icons/Group 505.svg';
import Group3 from '../assets/icons/Group 521.png';
import Group4 from '../assets/icons/Group 291.png';
import Group5 from '../assets/icons/Group.png';

const Partners = () => {
  
  const partnerLogos = [
    { src: Group1, alt: "Partner 1" },
    { src: Group2, alt: "Partner 2" },
    { src: Group3, alt: "Partner 3" },
    { src: Group4, alt: "Partner 4" },
    { src: Group5, alt: "Partner 5" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Join thousands of companies that trust our solutions
          </p>
        </div>

      
        <div className="hidden sm:block relative">
          <div className="flex items-center">
            
            <div className="flex animate-marquee space-x-8 lg:space-x-12 xl:space-x-16">
              {partnerLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[120px] lg:min-w-[150px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 lg:h-12 xl:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          
            <div className="flex animate-marquee space-x-8 lg:space-x-12 xl:space-x-16" aria-hidden="true">
              {partnerLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[120px] lg:min-w-[150px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 lg:h-12 xl:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

         
          <div className="absolute top-0 left-0 w-16 sm:w-20 lg:w-24 h-full bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-full bg-gradient-to-l from-[#F5F5F5] via-[#F5F5F5] to-transparent pointer-events-none z-10"></div>
        </div>

        
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-4">
            {partnerLogos.map((logo, index) => (
              <div
                key={`mobile-${index}`}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
