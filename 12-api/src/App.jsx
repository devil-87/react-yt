import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
    const response =  await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response);
  }

  return (
    <div>
      <button  onClick={getData}> 
        {/* normal function  */}
         {/* async function getdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response); */}

    {/* arrow function  */}
    {/* const getdata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  console.log(data); */}

    {/* axios API */}
    {/* const {data} = await axios.get('https://jsonplaceholder.typicode.com/users') */
    /* console.log(data); */}
    button dabao</button>
    <div>
      {data.map(function(elem , idx){

        return <h3>hey lulullu , {elem.author} {elem.url} {idx +1}</h3>
      })}
    </div>
    </div>
  )
}

export default App
