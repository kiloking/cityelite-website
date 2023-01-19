import React,{useState} from 'react'
import { FaPhoneAlt,FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, reset } from "react-hook-form";
import Modal from './Components/Modal';
function Footer() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      name:"",
      tel: "",
      mail: "",
      house_types:"",
      area:""
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    let url2 = process.env.PUBLIC_URL+'/api/contact/index.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div className='w-full py-10 bg-[#fff]'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/footer_bg.png'})`}}>
      {formStatus &&
       <Modal>
        <div className='bg-[#00000080] w-full h-full  absolute inset-0 z-0  ' onClick={()=>setFormStatus(!formStatus)}></div>
        <div className={` absolute z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-white mx-auto px-5 py-4  rounded-sm border-slate-200 w-2/5`}>
          <div className='text-base font-bold mt-5 pb-5'> 表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！</div>
        
        </div>
       </Modal> 
      }

      <div className='w-11/12 mx-auto flex gap-10 flex-col  lg:flex-row justify-start pt-10 bg-no-repeat bg-cover bg-center' >
        <div className='w-full  lg:w-1/2 ' data-aos="fade-up" data-aos-duration="1500">
            <div className='w-1/2 mx-auto md:w-5/12 md:mx-0 '>
              <img src={process.env.PUBLIC_URL+'/images/footer_logo.png'} alt="" className='w-full'/>
            </div>
            <div className='w-4/5 mx-auto w-fit lg:w-full mt-16 lg:mt-20 lg:mx-0'>
              <div className='flex items-center gap-5 mb-5  mx-auto lg:mx-0'>
                <div className='bg-[#083A5E] rounded-full p-2 mr-1'><FaPhoneAlt  color='#fff' size='10' /></div>
                <a href="tel:033200777" target="_blank"><b className='text-[#083A5E] md:text-xl  font-normal'>預約專線｜03-3200-777</b></a>
              </div>
              <div className='flex items-center gap-5 mb-5  mx-auto lg:mx-0'>
                <div className='bg-[#083A5E] rounded-full p-2 mr-1'><FaMapMarkerAlt  color='#fff' size='10' /></div>
                <b className='text-[#083A5E] md:text-xl font-normal'>服務總部｜桃園區龜山區文化一路,樂善二路口</b>
              </div>
            </div>

            <div className="mt-16 lg:mt-20 border-2 border-[#083A5E]">
              <iframe width="100%" height="300"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6368114366123!2d121.3857975!3d25.04639659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a76d2881c9d5%3A0x3e5e13a1313706e7!2zMzMz5qGD5ZyS5biC6b6c5bGx5Y2A5paH5YyW5LiA6LevICYg5qiC5ZaE5LqM6Lev!5e0!3m2!1szh-TW!2stw!4v1674118060971!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen=""/>
             
            </div>
          </div>
          {/* 表單 */}
          <div className='w-full  lg:w-1/2'>
            <div className='text-[#083A5E] text-2xl font-bold  text-left mb-5  lg:text-left-left'>線上預約</div>
            <div className='h-[2px] bg-[#083A5E] w-full my-3'></div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto my-10  rel" data-aos="fade-up" data-aos-duration="1500" >
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full
                      px-3 py-3 shadow-md " placeholder="姓名"   {...register("name", { required: true})}/>
                </div>
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full 
                      px-3 py-3 shadow-md " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                </div>
                <div className='w-full my-5  '>
                  <input type="mail" className="block  bg-white   w-full
                      px-3 py-3 shadow-md " placeholder="電子信箱"   {...register("mail", { required: true})}/>
                </div>

                <div className='text-[#083A5E] leading-9 font-bold text-base w-[90%] mx-auto'>
                  本人已知悉以下個人資料蒐集聲明事項您所登錄的個人資料將作為以下用途：一、本網站所載之相關事項通知 二、客戶管理與服務 三、本公司行銷業務之推廣
                  <div className='flex ai-center jc-center  '>

                    <input type="checkbox"  className='px-5 mr-5' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                    <label htmlFor="checkit" className='f-white'>我同意通過電話或郵件方式與我聯絡</label>
                  </div>
                </div>
                <div className='flex w-3/4 mx-auto gap-10 my-16'>
                  <button className='bg-[#083A5E] px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#fff]' type='submit'>送出</button>
                  <button className='bg-[#083A5E] px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#fff]' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </div>
          </div>

    </div>
  )
}

export default Footer