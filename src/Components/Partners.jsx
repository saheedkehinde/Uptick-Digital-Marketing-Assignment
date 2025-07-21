import React from 'react'
import Group1 from '../assets/icons/group 502.png'
import Group2 from '../assets/icons/group 505.svg'
import Group3 from '../assets/icons/group 521.png'
import Group4 from '../assets/icons/group 291.png'
import Group5 from '../assets/icons/group.png'


const Groups = [Group1, Group2, Group3, Group4,
     Group5,];

 


const Partners = () => {
  return (
    <section className='relative bg-[#F5F5F5] flex flex-col items-center justify-center'>
        <div className='flex justify-center gap-30 items-center  animate-scroll whitespace-nowrap flex-row mt-15 mb-15'>
            
             {Groups.map((groups, idx) => 
              <div key={idx}>
                <img src={groups} alt="" />
              </div>
            )}
        </div>
    </section>
  )
}

export default Partners