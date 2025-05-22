import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleComplete, editTodo } from "../features/todos/todoSlice";

const TodoApp = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('')

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSaveEdit = (id) => {
    if(editText.trim()) {
        dispatch(editTodo({id, newText: editText}));
        setEditId(null);
        setEditText('');
    }
  };

  return (
    <div>
      <h2>Redux Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>

      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))} />
                {editId === todo.id ? (
                    <>
                        <input type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} />
                        <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                    </>
                ) : (
                    <>
                        {todo.text}
                        <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                    </>
                )}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
