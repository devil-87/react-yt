import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
       <Card user='Mayank' age={19} img='https://images.unsplash.com/photo-1677070542698-164b6126d0de?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Samrat' age={21} img='https://images.unsplash.com/photo-1778392120781-a6b2b55dc12a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App
