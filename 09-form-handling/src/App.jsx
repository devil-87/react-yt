import React from 'react'

const App = () => {

  const submitHandler =(elem)=>{
    console.log('form submitted ');
    elem.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }} >
        <input type=" text "  placeholder=' enter your name '/>
        <button> submit </button>
      </form>
    </div>
  )
}

export default App
