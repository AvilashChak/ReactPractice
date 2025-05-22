import React from 'react'

const TodoInput = ({ input, setInput, handleAdd }) => {
  return (
    <div style={{margin: "1rem"}}>
      <input
        type="text"
        placeholder="Add Todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
