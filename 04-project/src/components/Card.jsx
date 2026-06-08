import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="random image" />
       <h1>{props.user} , {props.age}</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ullam nam alias!</p>
       <button>view profile</button>
      </div>
    </>
  )
}

export default Card
