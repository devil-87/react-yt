import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://img.magnific.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg?semt=ais_hybrid&w=740&q=80',
      color:'lightseagreen',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1779799882627-670bca01e56c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
      color:'purple',
      intro:'',
      tag:'UnderServed'
    },
     {
      img:'https://images.unsplash.com/photo-1778076115016-4253671abfd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
      color:'pink',
      intro:'',
      tag:'UnderBanked'
    }
  ]
  return (
    <div className='bg-red-200'>
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
