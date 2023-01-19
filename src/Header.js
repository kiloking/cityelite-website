import React from 'react'

function Header() {
  return (
    <div  
      className='bg-[#083A5E] min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
    >

        <div className='flex flex-col md:flex-row w-10/12  items-center' data-aos="fade-up" data-aos-duration="1500">
          <div className='mb-10 md:mb-0 md:mr-10'>
            <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt=""  />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/header_p01.png'} alt="" />
          </div>
        </div>

      

    </div>
  )
}

export default Header