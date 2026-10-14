import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const accordData = [
  {
    icon: "/icons/Writing Tone.svg",
    label: "Writing Tone",
    text: "Quickly switch between professional and casual tones. Make your writing polished for work or relaxed like a friendly chat — all in one click."
  },
  {
    icon: "/icons/Fix Grammer.svg",
    label: "Fix Grammer",
    text: "Neatly formats your text into clean paragraphs or bullet points. Optionally fixes grammar, punctuation, and turns written numbers into symbols — like “five dollars” to $5 — without changing your tone or meaning."
  }, {
    icon: "/icons/Transcript Only.svg",
    label: "Transcript Only",
    text: "Converts your spoken input into text exactly as it was said — no corrections, formatting, or extra processing."
  }, {
    icon: "/icons/Ask GPT.svg",
    label: "Ask GPT",
    text: "You can also build your own custom prompts to match your exact writing style."
  },
]

const Accordian = () => {
  const [open, setOpen] = useState(null)

  return (
    <div className=' w-full flex flex-col'>
      {accordData?.map((accord, index) => {
        const isActive = open === index
        return (
          <div key={index} className=' border-b-[1.5px] border-[#CECECE] flex flex-col  duration-300 transition-transform px-2 py-3.5'>
          <div className='flex items-center justify-between gap-3'>
            <div className=' flex items-center gap-2'>
              <img src={accord?.icon} alt={accord?.label} />
              <h1 className=' font-semibold text-black leading-0'>{accord?.label}</h1> 
            </div>
            <button onClick={() => {
              if(isActive){
                setOpen(null)
              }else{
              setOpen(index)
              }
              }} className={` ${isActive ? " rotate-180":" rotate-0"} text-[#CECECE] transition-transform duration-300 ease-in-out cursor-pointer`}>

              <IoIosArrowDown className='size-6' />
            </button>
            </div>
            <div className={` overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-40 opacity-100 py-2 ":" max-h-0 opacity-0"}`}>
              
              <p className='text-sm font-medium text-black'>{accord?.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordian
