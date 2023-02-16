import React from 'react'

function Header() {
  return (
    <div  
      className='bg-[#083A5E]  flex justify-center items-center bg-no-repeat bg-cover bg-center'
      
    >      
      <div className='' data-aos="fade" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL +'/images/release/header_bg.png'} alt=""  className='w-full'/>
      </div>
    </div>
  )
}

export default Header