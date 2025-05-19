import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.list.push({
            id: Date.now(),
            text: action.payload,
            completed: false
        });
    },
    deleteTodo: (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
        const todo = state.list.find((todo) => todo.id === action.payload);
        if(todo) {
            todo.completed = !todo.completed;
        }
    },
    editTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todo = state.list.find((todo) => todo.id === id);
        if(todo) {
            todo.text = newText;
        }
    }
  },
})

export const { addTodo, deleteTodo, toggleComplete, editTodo } = todoSlice.actions

export default todoSlice.reducer