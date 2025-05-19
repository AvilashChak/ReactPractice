import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply, divide, incrementByAmount } from './redux/counter/counterSlice.js'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      {/* How props drilling is done */}
      <Navbar count={count}/>
      <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          Currently count is {count}
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(multiply())}>*</button>
          <button onClick={() => dispatch(divide())}>/</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>
      </div>
    </>
  )
}

export default App
