import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <div className='w-full max-w-3xl mx-auto rounded-lg my-2 justify-center'>
          <h1 className='font-bold text-pink-800'>Manage your Todo List</h1>
          <AddTodo />
          <Todos />
      </div>
    </>
  )
}

export default App
