import React from 'react'

function Section3() {
  return (
    <div
      className='bg-[#F2EFEC] w-full bg-cover bg-no-repeat bg-bottom relative py-28'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section3_bg.png'})`}}
    >
      <div className=' ' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section3_logo.png'} alt="" className='max-w-full mx-auto w-2/3 md:w-1/2 disable-blur'/>
      </div>
      <div className=' py-14 ' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section3_p01.png'} alt="" className='max-w-full mx-auto w-2/3 md:w-4/5 disable-blur'/>
      </div>
      <div className=' flex py-8 items-center justify-center flex-wrap gap-5' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/release/section3_item1.png'} alt="" className='max-w-full mx-auto disable-blur'/>
        <img src={process.env.PUBLIC_URL+'/images/release/section3_item2.png'} alt="" className='max-w-full mx-auto disable-blur'/>
        <img src={process.env.PUBLIC_URL+'/images/release/section3_item3.png'} alt="" className='max-w-full mx-auto disable-blur'/>
      </div>

      
    </div>
  )
}

export default Section3