import React, { useContext } from 'react'
import { TextContext } from '../services/TextContext'

const ComponentA = () => {
    const {text, setText} = useContext(TextContext);

  return (
    <div>
      <h2>Component A</h2>
      <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default ComponentA
