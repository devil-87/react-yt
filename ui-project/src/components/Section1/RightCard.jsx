import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 rounded-3xl overflow-hidden relative'>
      <img className='h-full object-cover' src={props.img} />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCard
