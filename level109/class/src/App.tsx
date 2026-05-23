import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen  dark:bg-gray-800'>
      
      <div className='h-50 w-100 content-center text-center text-genada pt-2 pb-6  rounded-2xl border-4 '   >
        <h1 className='text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight '>Writes upside-Down</h1>
      
      <h3 className='text-gray-500 dark:text-gray-400 mt-2 text-sm '>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</h3>
      <br />
     <button className='bg-sky-500  w-30 rounded-2xl text-white  hover:bg-sky-700 '>Save changes</button>
     </div>

     </div>
     
    </>
  )
}

export default App
