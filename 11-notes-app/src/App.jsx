import React, { useState } from 'react'

const App = () => {
  const bgImage =
  "https://pics.clipartpng.com/White_Sticky_Note_PNG_Clipart-2375.png";

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler =(elem)=>{
    console.log('form submitted', title ,details)
    elem.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }
  const deleteNote =(idx)=> {
    const copyTask = [...task];
    
    copyTask.splice(idx ,1)
    
    setTask(copyTask)
  }

  return (
    <div className='h-screen  lg:flex bg-black text-white'>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }} className='flex items-start p-10 lg:w-1/2 flex-col gap-4 font-medium'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>


        <input type="text" 
        placeholder='Enter Notes Heading '
        className='px-4 py-2 border-2 rounded w-full' 
        value={title}
        onChange={(elem)=>{
        setTitle(elem.target.value)
        }}/>

        <textarea type="text" className='px-4 h-32 flex flex-row flex-start w-full py-2 border-2 rounded' placeholder='Write Details Here'
        value={details}
        onChange={(elem)=>{
          setDetails(elem.target.value)
        }}/>

        <button className='bg-white active:bg-gray-400 active:scale-97 w-full text-black px-5 py-2 rounded '>Add Note</button>

        {/* <img  className='h-52 rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="random images" /> */}
      </form>
      <div className='lg:w-1/2 bg-amber-950  lg:border-l-2 p-5'>
      
      <h1 className='text-3xl font-bold'>Recent Notes </h1>

      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-full'>
        {task.map(function (elem,idx){

          return <div key={idx} style={{ backgroundImage: `url(${bgImage})` }} className=' flex justify-between flex-col items-start h-52 w-40 rounded-2xl  text-black bg-cover bg-no-repeat py-7 pb-4 px-4 '> 
          {/* <h2 className='absolute top-3 right-1 p-1 rounded-full  bg-red-400 text-xs  '><X size={16} color="black" strokeWidth={3} /></h2> */}
          <div>
            <h3 className='text-xl font-bold leading-tight'>{elem.title}</h3>
          <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
          </div>
          <button  onClick={()=>{
            deleteNote(idx)
          }} 
          className='bg-red-600 w-full rounded-full py-1 text-xs font-bold text-white active:scale-95'>Delete notes</button>
                 </div>

        })}
      </div>

      </div>
    </div>
  )
}

export default App
