import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <h1>gogi tzulaia vs gia maladoi</h1>
            <img src="./assets/image.png" alt="" />
<p>აღწერა გოგის: გოგი წულაია კაი დროშას დაკიდებს</p>
<p>აღწერა გია მალადოის: გია მალადოი კაი ნავაროჩენ BWM E36-ს იყიდის</p>

    </>
  )
}

export default App
