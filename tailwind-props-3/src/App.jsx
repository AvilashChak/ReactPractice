import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj = {
  username: "Nanu",
  age: 30
 }

 let newArr = [1,2,3,4];

  return (
    <>
      <Card username="Nanu" btnText="Click Me" />
      <Card username="Avilash" btnText="Visit Me"/>
    </>
  )
}

export default App
