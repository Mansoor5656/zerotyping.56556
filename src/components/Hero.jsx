import React from 'react'
import { FaWindows } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='flex items-center gap-4 bg-[#c6e7fc] pt-40 pb-20 px-[2.5%]  rounded-3xl'>
<div className=' flex-1 flex flex-col gap-4'>
            <h1 className='text-[#000000]  text-[3.125rem] font-bold'>Stop Typing.<span className='text-[#407BFF]'>Start Talking.</span></h1>
            <p className='text-[#00000060] text-[1.4375rem]'>Your words, instantly typed anywhere.With fast, accurate voice dictation powered by AI: Works with all your apps.</p>

            <div className='flex gap-5'>
                <div className=''>

                    <button className=' flex text-center bg-[#3AB1F61A] text-[#4081FE] pl-2 pr-4 py-3 rounded-full gap-3'><img src='/public/icons/mic.svg' className='size-9 '></img>
                        Try it now!
                    </button>

                </div>

                <div>
                    <button className='flex items-center gap-5 bg-linear-to-r from-[#3AB1F6] to-[#407BFF] rounded-full px-4 py-4   text-white'>
                        <FaWindows className=' size-5 text-white' />

                        Download for Windows
                    </button>
                </div>


</div>
            </div>

                <div className=' flex-1'>

<div className="w-[85%] mx-auto rounded-2xl aspect-[1.07/1] overflow-hidden">

                    <video src="/videos/Light Mode.mp4" controls={false} muted loop autoPlay className="w-full scale-102 "></video>
</div>






                </div>





        </div>
    )
}

export default Hero
