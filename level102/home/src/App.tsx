import "./App.css";
import { useState } from "react";
import CaseChanger from "./components/ui/CaseChanger";
function App() {
  const [count, setCount] = useState(0);

  const Incerment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const reset = () => {
    setCount(count - count);
    console.log(count);
  };

  const Decerment = () => {
    setCount(count - 1);
    console.log(count);
  };

  const Duplicate = () => {
    setCount(count * 2);
    console.log(count);
  };

  const Square = () => {
    setCount(count * count);
    console.log(count);
  };

  const Root = () => {
    setCount(count * count);
    console.log(count);
  };

  let Color = "white"

if (count > 0) {
    Color = "green"
} 

if (count < 0) {
    Color = "red"
}

  return (
    <>
      <div className="niaa" style={{color:Color}}>{count}</div>
      <button onClick={Incerment} className="giaa">
        incerment
      </button>
      <button onClick={Decerment} className="giaa">
        decerment
      </button>
      <button onClick={Duplicate} className="giaa">
        Duplicate
      </button>
      <button onClick={Square} className="giaa">
        square
      </button>
      <button onClick={Root} className="giaa">
        root
      </button>
      <button onClick={reset} className="mshiaa" >
        reset
      </button>

      <CaseChanger></CaseChanger>
      
    </>
  );
}

export default App;
