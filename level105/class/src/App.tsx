import { useState } from 'react'
import { createContext } from 'react'
import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';
import FooterSection from './components/FooterSection';
interface ContexType{
  count:number;
  setCount:React.Dispatch<React.SetStateAction<number>>;

}
export const Context = createContext<null|ContexType>(null)
function App() {
  const [count, setCount] = useState(0)
  
  return (
   <>
   <Context.Provider value={{count,setCount:setCount}}>
  <HeaderSection></HeaderSection>
  <MainSection></MainSection>
  <FooterSection></FooterSection>
  </Context.Provider>
</>
  )
}



export default App
