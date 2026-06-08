import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  
  const submitHandler =(elem)=>{
    console.log('form submitted by', title);
    elem.preventDefault()

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name' value={title} onChange={(elem)=>{
          setTitle(elem.target.value);
        }}/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
