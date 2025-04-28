import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faSquareRootVariable, faDivide, faXmark, faMinus, faPlus, faEquals, faDeleteLeft, faC, faE, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  function addDigit(digit: string): void {
    if (currentOperand.length === 16) return;
    if (currentOperand === "0" && digit === "0") return;
    if (currentOperand.includes(".") && digit === ".") return;
    if (currentOperand === "0" && digit !== ".") return setCurrentOperand(`${digit}`);
    setCurrentOperand(`${currentOperand}${digit}`);
  }

  function deleteDigit(): void {
    if (currentOperand.length === 1) {
      return setCurrentOperand("0");
    }
    setCurrentOperand(currentOperand.slice(0, -1));
  }

  function clearOperation(): void {
    setCurrentOperand("0");
    setPreviousOperand(null);
    setOperation(null);
  }

  function clearExpression(): void {
    return setCurrentOperand("0");
  }

  function swapSignal(): void {
    setCurrentOperand((Number(currentOperand) * -1).toString());
  }

  function chooseOperation(op: string): void {
    if (op === "%") return;
    
    if (["√", "²", "!"].includes(op)) {
      setOperation(op);
      return;
    }
  
    if (!previousOperand) setPreviousOperand(currentOperand);
    setOperation(op);
    setCurrentOperand("0");
  }

  function factorial(n: number): number {
    if (n < 0) return NaN;
    if (n > 170) return Infinity;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }  

  function equals(): void {
    switch (operation) {
      case "+":
        setCurrentOperand((Number(previousOperand) + Number(currentOperand)).toString());
        break;
      case "-":
        setCurrentOperand((Number(previousOperand) - Number(currentOperand)).toString());
        break;
      case "x":
        setCurrentOperand((Number(previousOperand) * Number(currentOperand)).toString());
        break;
      case "÷":
        setCurrentOperand((Number(previousOperand) / Number(currentOperand)).toString());
        break;
      case "√":
        setCurrentOperand((Math.sqrt(Number(currentOperand))).toString());
        break;
      case "²":
        setCurrentOperand((Number(currentOperand) * Number(currentOperand)).toString());
        break;
      case "!":
        setCurrentOperand((factorial(Number(currentOperand)).toString()));
        break;
      default:
        return;
    }
    setPreviousOperand(null)
    setOperation(null)
  }
  
  return (
    <>
      <main>
          <div className='div'>
              <h1>
                  CalculatorTS<span>.pexe.dev</span>
              </h1>
              <div id="previousOperand">
                  <output>
                    {previousOperand}
                  </output>
                  <output>
                    {operation}
                  </output>
              </div>
              <output id="currentOperand">
                  {currentOperand}
              </output>
          </div>
          <button onClick={() => chooseOperation("%")}>
            <FontAwesomeIcon icon={faPercent} />
          </button>
          <button onClick={() => clearExpression()}>
            <FontAwesomeIcon icon={faC} /> <FontAwesomeIcon icon={faE} />
          </button>
          <button onClick={() => clearOperation()}>
            <FontAwesomeIcon icon={faC} />
          </button>
          <button onClick={() => deleteDigit()}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button onClick={() => chooseOperation("!")}>
              x!
          </button>
          <button onClick={() => chooseOperation("²")}>
              x<sup>2</sup>
          </button>
          <button onClick={() => chooseOperation("√")}>
            <FontAwesomeIcon icon={faSquareRootVariable} />
          </button>
          <button onClick={() => chooseOperation("÷")}>
            <FontAwesomeIcon icon={faDivide} />
          </button>
          <button onClick={() => addDigit("7")}>
            <FontAwesomeIcon icon={fa7} />
          </button>
          <button onClick={() => addDigit("8")}>
            <FontAwesomeIcon icon={fa8} />
          </button>
          <button onClick={() => addDigit("9")}>
            <FontAwesomeIcon icon={fa9} />
          </button>
          <button onClick={() => chooseOperation("x")}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button onClick={() => addDigit("4")}>
            <FontAwesomeIcon icon={fa4} />
          </button>
          <button onClick={() => addDigit("5")}>
            <FontAwesomeIcon icon={fa5} />
          </button>
          <button onClick={() => addDigit("6")}>
            <FontAwesomeIcon icon={fa6} />
          </button>
          <button onClick={() => chooseOperation("-")}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={() => addDigit("1")}>
            <FontAwesomeIcon icon={fa1} />
          </button>
          <button onClick={() => addDigit("2")}>
            <FontAwesomeIcon icon={fa2} />
          </button>
          <button onClick={() => addDigit("3")}>
            <FontAwesomeIcon icon={fa3} />
          </button>
          <button onClick={() => chooseOperation("+")}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button onClick={() => swapSignal()}>
              <sup>-</sup>/<span>+</span>
          </button>
          <button onClick={() => addDigit("0")}>
            <FontAwesomeIcon icon={fa0} />
          </button>
          <button className='text-3xl' onClick={() => addDigit(".")}>
              .
          </button>
          <button id="equalButton" onClick={() => equals()}>
            <FontAwesomeIcon icon={faEquals} />
          </button>
      </main>
    </>
  )
}

export default App;