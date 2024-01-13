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


/*
// Approach1:

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // we used IIFE because for await we have to make the function async so we used IIFE here.
    (async() => {
    try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
    } catch (error) {
        console.log(error) 
        setError(true)   
        setLoading(false)
    }
    })()
  },[])

  if (error){
    return <h1>Something went wrong.</h1>
  }

  if (loading){
    return <h1>Loading..</h1>
  }

  return (
    <>
      <h1>Chai and API in react.</h1>
      <h2>Number of Products are: {products.length}</h2>   
    </>
  )
}

*/

/*
// Approach2:

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // we used IIFE because for await we have to make the function async so we used IIFE here.
    (async() => {
    try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
    } catch (error) {
        console.log(error) 
        setError(true)   
        setLoading(false)
    }
    })()
  },[])

  if (error){
    return <h1>Something went wrong.</h1>
  }

  if (loading){
    return <h1>Loading..</h1>
  }

  return (
    <>  
      <h1>Chai and API in react.</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

*/


/*

// Approach3:

export default function App() {

  const [products, error, loading] = customReactQuery('/api/products')

  if (error){
    return <h1>Something went wrong.</h1>
  }

  if (loading){
    return <h1>Loading..</h1>
  }

  return (
    <>
      <h1>Chai and API in react.</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // we used IIFE because for await we have to make the function async so we used IIFE here.
    (async() => {
    try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath)
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
    } catch (error) {
        console.log(error) 
        setError(true)   
        setLoading(false)
    }
    })()
  },[])

  return [products, error, loading]
}

*/

/*

// Approach4:

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // we used IIFE because for await we have to make the function async so we used IIFE here.
    (async() => {
    try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
    } catch (error) {
        console.log(error) 
        setError(true)   
        setLoading(false)
    }
    })()
  },[])

  return (
    <>  
      <h1>Chai and API in react.</h1>
      {loading && (<h1>Loading..</h1>)}
      {error && (<h1>Something went wrong.</h1>)}
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

*/

//Approach5: 

export default function App() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const controller = new AbortController()
  // we avoid the race condition by using AbortController methods.

  useEffect(()=> {
  
     // we used IIFE because for await we have to make the function async so we used IIFE here.
    ;(async() => {
    try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
         // this controller will cancel all the old request on a particular URL, but send those in catch block. 
          signal: controller.signal   
        })
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
    } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled: ', error.message)
          return
        }
        setError(true)   
        setLoading(false)
    }
    })()

    // clearnup code
    return () => {
      controller.abort()
    }
  },[search])


  if (error){
    return <h1>Something went wrong.</h1>
  }

  if (loading){
    return <h1>Loading..</h1>
  }

  return (
    <>
      <h1>Chai and API in react.</h1>
      <input type="text" placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
      {loading && (<h1>Loading..</h1>)}
      {error && (<h1>Something went wrong.</h1>)}
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}


