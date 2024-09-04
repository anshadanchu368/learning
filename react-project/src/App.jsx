import { useState } from 'react'


function App() {
  const [color, setColor] = useState("orange")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      hola
    </div>
  )
}

export default App
