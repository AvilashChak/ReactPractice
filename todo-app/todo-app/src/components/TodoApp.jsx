import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Saves todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Loads todos from local storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    console.log("Todos:", newTodo);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSave();
    }
  };

  return (
    <>
      <h2>Todo App</h2>
      <TodoInput input={input} setInput={setInput} handleAdd={handleAdd}/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={handleEditChange}
                    onKeyDown={handleKeyDown}
                  />
                  <button onClick={handleEditSave}>Save</button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => handleToggle(todo.id)}
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      cursor: "pointer",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => handleEdit(todo.id, todo.text)}>
                    Edit
                  </button>
                </>
              )}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
