import React from 'react'
import Group1 from '../assets/icons/group 502.png'
import Group2 from '../assets/icons/group 505.svg'
import Group3 from '../assets/icons/group 521.png'
import Group4 from '../assets/icons/group 291.png'
import Group5 from '../assets/icons/group.png'




 


const Partners = () => {
  return (
    <section className='bg-[#F5F5F5] min-h-35 flex flex-col items-center justify-center py-10'>
  <div className='flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-5 sm:gap-x-5 sm:px-3'>
    <img src={Group1} alt="Partner 1" className='w-36 sm:w-24' />
    <img src={Group2} alt="Partner 2" className='w-36 sm:w-24' />
    <img src={Group3} alt="Partner 3" className='w-36 sm:w-24' />
    <img src={Group4} alt="Partner 4" className='w-36 sm:w-24' />
    <img src={Group5} alt="Partner 5" className='w-36 sm:w-24' />
  </div>
</section>

  )
}

export default Partners