import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>

         <div className=' ml-10 mt-1 mb-1 h-40 w-44 overflow-hidden rounded-xl bg-white'>
        <img  className='h-full w-full object-cover' src={props.elem.download_url} alt=" random images" />
        </div>
        <h2 className='font-bold-lg ml-10'>{props.elem.author}</h2>

        </a>
    </div>
  )
}

export default Card
