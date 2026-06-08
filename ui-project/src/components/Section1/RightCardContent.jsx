import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-9 flex flex-col justify-between'>
           <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center font-bold text-xl'>{props.id}</h2>
           <p className='text-lg leading-relaxed text-white mt-40'>Lorem ipsum dolor sit amet consectetur adiquidem perspiciatis, nulla soluta temporibus labore iusto!</p>
           <div className='flex justify-between'>
           <button  style={{backgroundColor:props.color}} className='text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
           <button style={{backgroundColor:props.color}} className='text-white font-medium px-4 py-2 rounded-full'><ArrowRight size={17}/></button>
           </div>
    </div>
  )
}

export default RightCardContent
