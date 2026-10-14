import React from 'react'
import { FaWindows } from 'react-icons/fa6'

const Navbar = () => {
  return (
   <div className='flex justify-between fixed top-10  bg-[#fff]/30 backdrop-opacity-30 backdrop-blur-lg shadow-lg rounded-full items-center gap-3 w-[94%] left-[3%] right-[3%] px-2 py-3 z-100'>
   
    <div>
      <img src='/icons/ZERO Tying  logo.svg' alt='abc' />
    </div>

    <div className='flex justify-between items-center gap-5 text-[#00000050]'>
        <h1>HOME</h1>
        <h1>DEMO</h1>
        <h1>PRICING</h1>
        <h1>HELP</h1>
    </div>


    <div className='flex justify-between items-center gap-2'>

        <button className='bg-[#D7EFFC] text-[#3AB1F6] px-6 py-4 rounded-full'>Sign in</button>

        <button className='flex items-center gap-5 bg-linear-to-r from-[#3AB1F6] to-[#407BFF] rounded-full px-4 py-4   text-white'>
<FaWindows className=' size-5 text-white' />
        Download for Windows
        

        </button>
        
    </div>
    
    
    
    
    </div>
  )
}

export default Navbar
