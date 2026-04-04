import { useState } from 'react'
import './App.css'
import Button from './components/Button'
function App() {

const [count,setCount] = useState(0)
console.log(count)
const handelIncrease = () =>{
  setCount((prewv) => prewv + 10);
}

  return (
    <>
      <div>{count}</div>
      <button onClick={handelIncrease}>add</button>
      <Button color={'newcolor'} size={"large"}>names</Button>
    </>
  )
}

export default App
// function myUsestate(initialstate){
// let state = initialstate
// function setState(newState){
//   state = newState
// }
// return [state,setState];
// }
// const [state,setState] = myUsestate(0)
// setState(1);
// console.log(state)