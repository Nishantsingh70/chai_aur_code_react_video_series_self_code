/* 
  npm create vite@latest .  (here . is used for creating all the file/folder in same folder where we are.)
  npm install 
  npm install axios
*/

/* 
  If we add  
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  in vite.config.js file then before /api request this localhost url will add and server will assume that
  this request is coming from same URL and port number as backend.
*/

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  // if you use axios then you don't need to change the response into JSON format, axios will handle it.
  // If we have some the requirement to update the API response then we use axios and many more features in it.
  
  useEffect(() => {
    axios.get('/api/jokes')
    .then(response => {
        setJokes(response.data)
      })
    .catch(error => console.log(error))
  })

  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
