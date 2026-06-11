import React from 'react'

const App = () => {

  
   const  usser = localStorage.setItem('hello' , 'hey')
   const hi = localStorage.getItem('hello')
   console.log(hi);
   localStorage.removeItem('hello')
   localStorage.clear()



     return (
    <div>
    mero naam chilluaa h 
    </div>
  )
}

export default App
