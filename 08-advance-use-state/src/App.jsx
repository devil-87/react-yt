import React, { useState } from 'react'
import { jsx } from 'react/jsx-runtime'

const App = () => {

  const [num, setNum] = useState({user:'mayank', age:20})

  const changeNum =()=>{
     const newNum = {...num};
    newNum.user = 'aman'
    newNum.age = 21

    setNum(newNum)
  }
  return (
    <div>
      <h1> name: {num.user}, age: {num.age}</h1>
      <button onClick={changeNum}> click me </button>
    </div>
  )
}

export default App
