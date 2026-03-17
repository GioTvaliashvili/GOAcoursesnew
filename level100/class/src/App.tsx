import { useState } from 'react'

import './App.css'

function App() {

const [count,setCount] = useState(0);

const Click = () => {
  setCount(count + 1);
  console.log(count)
}
const reset = () => {
 
    setCount(count - count);
    console.log(count)
  
}

const Mushebi = [
"Maliari gela",
"zeshtianchiki rezo",
"xadaviki vato",
"mkraskveli zviada"
]

  return (
    <>
      <div>
        <div className='niaa'>{count}</div>
        <button onClick={Click} className='giaa'>count</button>
        <button onClick={reset} className='mshiaa'>reset</button>

        <ul>
          {Mushebi.map((val,index)=> {
            return <li key={index}>{val} </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
