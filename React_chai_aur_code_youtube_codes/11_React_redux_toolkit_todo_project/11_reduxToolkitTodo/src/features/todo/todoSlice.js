import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                status: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.items.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = text;
            }
        },
        updateTodo1: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? 
            {...todo, text: action.payload.text} : todo)
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload? 
            {...todo, status: !todo.status} : todo)
            console.log(state.todos)
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer