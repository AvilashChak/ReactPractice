import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  //let counter = 5;

  const addValue = () => {
    if(counter < 20) {
      console.log("value added", Math.random());
      counter = counter + 1;
      setCounter(counter);
    } else {
      alert("Counter value has reached its limit");
    }
  }

  const removeValue =() => {
    if(counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      alert("Counter value has reached its limit");
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value: {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
