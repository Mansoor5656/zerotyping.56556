import React from 'react'

const Section1 = () => {
  return (
    <div className='flex  items-center gap-4 p-[2.5%]'>


<div className='flex-1'>
<div className='w-[85%] mx-auto rounded-[2rem] overflow-hidden'>

 <video src="/public/videos/Meter.mp4" controls={false} muted loop autoPlay className="w-full
  "></video>
</div>

</div>






<div className=' flex-1 flex flex-col gap-4'>

<h1 className='text-[#000000]  text-[3.125rem] font-bold'><span className='text-[#407BFF]'>5× Faster Efficiency</span> Get More Done in Less Time</h1>
<p className='text-[#00000060] text-[1.4375rem]'>Dictate instead of typing and finish emails, notes, messages, and documents up to 5× faster. Stay focused while ZeroTyping turns your voice into polished text instantly.</p>
<div>
<button className='flex items-center gap-5 bg-linear-to-r from-[#3AB1F6] to-[#407BFF] rounded-full pl-2 pr-6 py-2  text-white '>

<img src='/public/icons/download.svg' className='size-12'></img>
Download App</button></div>

</div>




      
    </div>
  )
}

export default Section1
