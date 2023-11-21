import { useState } from 'react'
import './App.css'
import Calculator from './calculation'

function App() {
  // Here we save the State of the numbers and do the calculation! 
  const [currentInput, setCurrentInput] = useState(''); 
  const [result, setResult] = useState(0); 
  const [history, setHistory] = useState<string[]>([]);

  // How can we add these numbers up? Do we even need three states? Seems a little bit too much...
  // Can we somehow work with the history? 

  // We always take the last number in the history with the currentInput when performing the operation. After we performed the operation we will show the result, append the currentInput to the history and reset the currentInput? 
  
  
  const handleResetNumber = () => {
    setCurrentInput('')
    setHistory([])
  }; 

  const toggleNumber = (value: string) => {
    setResult(0)
    setCurrentInput(currentInput+value)
    console.log("current input", currentInput)
  }

  const handleOperations = (operator: string) => {
    var calc_result = 0
    console.log("The history is", history, "current input is", currentInput)
    console.log("Operator: ", operator)
    if (history.length === 0  && currentInput){
      console.log("appending to history")
      setHistory([...history, currentInput])
      setCurrentInput('')
    } 
    else if (history && currentInput) {
      switch (operator) {
        case "+": 
          calc_result = Number(history[history.length-1]) + Number(currentInput)
          setResult(calc_result);
          console.log("Addition", String(Number(history[history.length-1]) + Number(currentInput)))
          setHistory([...history, String(calc_result)])
          break; 
        case "-":
          calc_result = Number(history[history.length-1]) - Number(currentInput)
          setResult(calc_result);
          setHistory([...history, String(calc_result)])
          break; 
        case "X":
          calc_result = Number(history[history.length-1]) * Number(currentInput)
          setResult(calc_result);
          setHistory([...history, String(calc_result)])
          break;
        case "/":
          // Here we still have to check for null division 
          try {
            calc_result = Number(history[history.length-1]) / Number(currentInput)
            setResult(calc_result)
            setHistory([...history, String(calc_result)])
          }
          catch (e) {
            console.log("Division by zero")
          }
          break; 
        // case "=": 
        //   setResult
      }
    }
    setCurrentInput('')
    console.log("History: ", history)
    console.log("Current Input:",currentInput)
  }; 

  return (
    <>
    <Calculator resetNumber= {handleResetNumber} currentInput= {currentInput} handleOperations = {handleOperations} toggleNumber={toggleNumber} result={result}/>
    </>
  )
}

export default App
