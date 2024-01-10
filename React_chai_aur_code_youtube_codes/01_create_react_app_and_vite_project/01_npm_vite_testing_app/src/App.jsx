import Chai from './Chai'

function App() {

  const username = "chai aur code"
  return (
    <>
    <Chai />
     <h3>Chai aur code from app.jsx {username} checking</h3>  
    {/* Note: here username is the evaluated expression. */}
    </>
  )
}

export default App
