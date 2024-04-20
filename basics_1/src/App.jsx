import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  let [counter, setCount] = useState(0) 


  const addValue = () => {
    console.log("The counter value is" + counter);
    if (counter < 20) {
      setCount(counter+1);
    } else {
      alert("You have reached the maximum value");
    }
  }

  const removeValue = () => {
    console.log("The counter value is" + counter);
    if (counter > 0) {
      setCount(counter-1);
    } else {
      alert("You have reached the minimum value");
    }
  }

  return (
    <>
      <div><h1>Counter App</h1></div>
      <h2>Count Value: {counter}</h2>
      <button onClick={addValue}>Increment</button> <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
