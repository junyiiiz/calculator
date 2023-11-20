// import { useState } from 'react'

import './App.css'
import Calculator from './calculation'
import Button from "@mui/material/Button"

function App() {
  // Here we save the State of the numbers and do the calculation! 
  // const [count, setCount] = useState(0)

  return (
    <>
    <Button className="numbers">AC</Button>
    <Calculator/>
    </>
  )
}

export default App
