import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  //let counter = 5;

  const addValue = () => {
    if (counter < 20){
      //counter = counter + 1 ;
      console.log('clicked: ', counter);

      // useState send the updates in UI in batches. You are doing the same work
      // multiple times in below code. So you will get counter value is 16. 
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);

      // setCounter(() => {}) => prevCounter will give the last updated state then you will get
      // counter value is 19.
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0){
      counter = counter - 1;
      console.log('clicked: ', counter);
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>    QQQQ
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
