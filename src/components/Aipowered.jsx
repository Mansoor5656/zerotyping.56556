import React from 'react'

const Aipowered = () => {
  return (
    <div className='flex items-center gap-4 p-[2.5%]'>

<div className=' flex-1'>

<div className='w-[85%] mx-auto rounded-[2rem] aspect-[1.02/1] overflow-hidden'>

    <video src='/videos/Ai language.mp4' controls={false} muted loop autoPlay className='w-full scale-102'></video>
</div>

</div>



<div  className='flex-1'  flex flex-col gap-4>

<h1  className='text-[#000000] text-[3.125rem] font-bold '><span className='text-[#407BFF]'>Ai powered</span>Language Detection</h1>
<p className='text-[1.4375rem]'>Powered with AI, Zero Typing will automatically detect any language you speak in and give you a polished output depending on the way you have configured your application. Switch between languages without any hassle, just speak!</p>
<button className='flex items-center w-max text-[#fff] bg-linear-to-r from-[#3AB1F6] to-[#407BFF] py-2 pl-2 pr-4 rounded-full gap-5'>


<img src='/icons/download.svg' className='size-8 gap-7'></img>

Download App</button>

</div>




      
    </div>
  )
}

export default Aipowered
