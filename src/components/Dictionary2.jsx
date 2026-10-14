import React from 'react'

const Dictionary2 = () => {
  return (
    <div className='flex items-center gap-4 p-[2.5%] '>


    <div className='flex-1 flex flex-col gap-4'>
    <h1 className='text-[#000000] text-[3.125rem] font-bold'><span className='text-[#407BFF]'>Personal Dictionary</span>That knows your word</h1>
<p className='text-[#000000] text-[1.4375rem]'>Add names, terms, or custom spellings to your personal dictionary so Zero Typing always gets it right. No more awkward typos or missed details.</p>
<button className='flex items-center w-max text-[#fff] bg-linear-to-r from-[#3AB1F6] to-[#407BFF] rounded-full py-2 pl-2 pr-6 gap-5 '>

<img src='/icons/download.svg'></img>

Download App

</button>

    </div>

<div className='flex-1'>

<div className='w-[85%] mx-auto rounded-[2rem] aspect-[1.03/1] overflow-hidden'>

<video src='/videos/Personal Dictionary (1).mp4' controls={false} muted loop autoPlay className='w-full scale-102'></video>

</div>

</div>

      
    </div>
  )
}

export default Dictionary2
