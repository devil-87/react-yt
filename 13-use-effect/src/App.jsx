import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log("a change ho rha h ");
  }

    function bChanging(){
    console.log("b change ho rha h ");
  }
   useEffect(function(){
    aChanging()
    console.log("use effect is running ")
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h2>B is {b}</h2>
      <button 
      onClick={()=>{
        setA(a+1)
      }}
      >change A</button>
      
      <button 
      onClick={()=>{
        setB(b-1)
      }}
      >change B</button>
    </div>
  )
}

export default App
