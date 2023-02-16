import React from 'react'

function Section4() {
  return (
    <div
      className='bg-[#F2EFEC] w-full bg-cover bg-no-repeat bg-center relative py-16 md:y-32'
      
    >
  

      <div className=' absolute top-0 left-0 ' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section4_c01.png'} alt="" className='max-w-full'/>
      </div>
      <div className='flex items-center justify-between flex-col md:flex-row' data-aos="fade" data-aos-duration="1500">
        <div className='w-1/2 mx-auto mb-10'>
          <img src={process.env.PUBLIC_URL+'/images/release/section4_logo.png'} alt="" className='nax-w-full mx-auto'/>
          <img src={process.env.PUBLIC_URL+'/images/release/section4_title.png'} alt="" className='nax-w-full mx-auto py-10 md:py-20'/>
          <img src={process.env.PUBLIC_URL+'/images/release/section4_text.png'} alt="" className='nax-w-full mx-auto'/>
        </div>
        <div className=''>
          <img src={process.env.PUBLIC_URL+'/images/release/section4_p01.png'} alt="" className='w-full'/>
        </div>
        
      </div>

      
    </div>
  )
}

export default Section4