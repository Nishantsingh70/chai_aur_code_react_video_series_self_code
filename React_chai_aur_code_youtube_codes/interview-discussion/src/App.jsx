import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

/*
function App() {

  const [value, setValue] = useState(1)
  const [multipliedValue, setMultipliedValue] = useState(1)

  
  const multiplybyfive = () => {
    setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button
      onClick={multiplybyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  )
}

Solution with 2 states.
*/

/*
function App() {

  //Important Note:  If we change the useState value then complete component reload again.

  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value * 5

  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button
      onClick={multiplybyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  )
}
Solution with 1 state only.
*/

// ========================================================================================================


/*
function App() {
  console.log("App rendered", Math.random())
  const [value, setValue] = useState(1)

  const clickMe = () => {
    console.log("logged") 
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
    </>
  )
}

Answer: App will not render again.
*/

/*
function App() {
  console.log("App rendered", Math.random())
  const [value, setValue] = useState(1)

  const clickMe = () => { 
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
    </>
  )
}

Answer: App will render again.
*/

/*
function App() {
  console.log("App rendered", Math.random())
  const [value, setValue] = useState(1)

  const clickMe = () => { 
    setValue(1)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
    </>
  )
}

Answer: App will not render again.
*/

/*
function App() {
  console.log("App rendered", Math.random())
  const [value, setValue] = useState(1)

  const clickMe = () => { 
    setValue(3)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
    </>
  )
}
Answer: App will render only 2 times.
*/


// Important concept: call by valye and call by reference

function App() {
  console.log("App rendered ", Math.random())
  const [value, setValue] = useState({value: 0})

  const clickMe = () => { 
    setValue({value: 0})
  }

  useEffect(() => {}, [value.value])

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
    </>
  )
}

/*
Answer: App will render again and again because we are passing non primitive datatype
        we are passing call by reference. So don't depend on object state better use value.value state in react
        for better performance.
        
        example: useEffect(() => {}, [value.value])
*/

export default App
