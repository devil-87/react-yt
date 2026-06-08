import React from 'react'

const App = () => {
  return (
    <div>
      <input onChange={function(elem){
        console.log(elem.target.value);
      }} type="text"  placeholder='Enter Name'/>
    </div>
  )
}

export default App
