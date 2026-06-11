import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getdata = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    setUserData(response.data)

    console.log(response.data);
  }

  useEffect(function (){
    getdata()
  },[index])

  let printUserData = <h3 className='text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold'>Loading...</h3>

  if(userData.length>0){
    printUserData =userData.map(function (elem, idx ){

      return <div key={idx}>
        <Card  elem={elem}/>
      </div>
    })
  }


  return (
    <div className='bg-black h-screen overflow-auto text-white '>
      {/* <button 
      onClick={getdata}
      className='bg-green-500 text-white rounded active:scale-95 m-3 ml-10 py-2 px-5 '>Get Data</button> */}
     
      <div className='h-[80vh] overflow-auto flex flex-wrap gap-3 ml-4 pt-3' >
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>


        <button 
        style={{opacity: index == 1? 0.6 :1 }}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-amber-400 text-sm  cursor-pointer active:scale-95   text-black rounded px-5 font-semibold py-2 '>Prev</button>
        
        <h4> Page {index}</h4>

        <button 
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        className='bg-amber-400  cursor-pointer active:scale-95 text-sm text-black rounded px-5 font-semibold py-2 '>Next</button>


      </div>

    </div>
  )
}

export default App
