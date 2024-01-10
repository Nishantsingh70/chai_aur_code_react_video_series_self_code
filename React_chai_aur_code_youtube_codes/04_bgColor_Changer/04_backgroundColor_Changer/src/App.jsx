import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-2000" style={{backgroundColor: color}}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-5 px-22" style={{backgroundColor: "white"}}>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg px-4 py-2 rounded-3xl" style={{backgroundColor: "pink"}}>
               
              <button
                /*  
                   onClick expect that you will pass the reference of function but in onClick={setColor("red")}
                   syntax you can't pass the parameter in function because onClick will execute it. 
                */
                onClick={() => setColor("red")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}>Red
              </button>

              <button
                onClick={() => setColor("green")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}>Green
              </button>

              <button
                onClick={() => setColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "blue"}}>Blue
              </button>

              <button
                onClick={() => setColor("yellow")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "yellow"}}>Yellow
              </button>

              <button
                onClick={() => setColor("aqua")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "aqua"}}>Aqua
              </button>

              <button
                onClick={() => setColor("black")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "black"}}>Black
              </button>

              <button
                onClick={() => setColor("lightblue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "lightblue"}}>Lightblue
              </button>

              <button
                onClick={() => setColor("purple")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "purple"}}>Purple
              </button>

              <button
                onClick={() => setColor("grey")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "grey"}}>Grey
              </button>

            </div>
         </div>
      </div>
         
       
  )
}

export default App
