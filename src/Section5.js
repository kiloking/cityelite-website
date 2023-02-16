import React from 'react'

function Section5() {
  return (
    <div  className='bg-[#F2EFEC] w-full bg-cover bg-no-repeat bg-center relative py-16'>
      <div className='px-6 md:px-36 pb-24 md:py-8 z-20 ' data-aos="fade" data-aos-duration="1500">
          <img src={process.env.PUBLIC_URL+'/images/release/section5_p01.png'} alt="" className='max-w-full md:w-4/5 disable-blur'/>
      </div>
      <div className=' absolute bottom-0 right-0 z-10' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section5_c01.png'} alt="" className='max-w-full ml-auto w-1/3 md:w-full disable-blur'/>
      </div>
    </div>
  )
}

export default Section5