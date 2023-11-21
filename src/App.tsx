import { useState } from "react";
import "./App.css";
import Calculator from "./calculation";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  const handleResetNumber = () => {
    setResult(0);
    setCurrentInput("");
    setHistory([]);
  };

  const toggleNumber = (value: string) => {
    console.log("value", value);
    // Validation of decimals
    if ((value == "," && !currentInput.includes(",")) || value != ",") {
      setResult(0);
      setCurrentInput(currentInput + value);
      console.log("current input", currentInput);
    }
  };

  const performCalculation = (
    operator: string,
    num1: number,
    num2: number
  ): number => {
    console.log("CALCULATION", num1, num2);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "X":
        return num1 * num2;
      case "/":
        try {
          const calc = num1 / num2;
          return calc;
        } catch (e) {
          console.log("Division by zero");
          return 0;
        }
      default:
        return 0;
    }
  };

  const handleOperations = (operator: string) => {
    if (operator === "+/-" && currentInput) {
      setCurrentInput(String(Number(currentInput) * -1));
      return;
    }
    if (operator === "%" && currentInput) {
      setCurrentInput(String(Number(currentInput) / 100));
      return;
    }
    if (history.length === 0 && currentInput) {
      console.log("appending to history");
      setHistory([...history, operator, currentInput]);
      setCurrentInput("");
    } else {
      if (history[history.length - 2] != "=" && currentInput) {
        if (operator === "=") {
          operator = history[history.length - 2];
        }
        const cleaned_number_1 = Number(
          history[history.length - 1].replace(",", ".")
        );
        const cleaned_number_2 = Number(currentInput.replace(",", "."));
        const calc_result = performCalculation(
          operator,
          cleaned_number_1,
          cleaned_number_2
        );
        setResult(calc_result);
        setHistory([...history, operator, String(calc_result)]);
        setCurrentInput("");
      }
    }
    setCurrentInput("");
  };

  return (
    <>
      <Calculator
        resetNumber={handleResetNumber}
        currentInput={currentInput}
        handleOperations={handleOperations}
        toggleNumber={toggleNumber}
        result={result}
      />
    </>
  );
}

export default App;
