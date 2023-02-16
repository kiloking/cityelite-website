import React from 'react'

function Section2() {
  return (
    <div
      className='bg-[#F2EFEC] w-full bg-cover bg-no-repeat bg-center relative py-16'
      
    >
      <div className=' ' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section2_p01.png'} alt="" className='w-full disable-blur'/>
      </div>
      <div className='pt-12 pb-28' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section2_p02.png'} alt="" className='w-full disable-blur'/>
      </div>
      <div className=' absolute bottom-0 right-0 ' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section2_c01.png'} alt="" className='max-w-full w-1/2 ml-auto md:w-full'/>
      </div>

      
    </div>
  )
}

export default Section2