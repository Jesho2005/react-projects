import "./style.css";
import { useState } from "react";

function Calculator() {
  const [output,setOutput] = useState([]);

  function calc(value) {
    if (value === "=") {
      try {
        setOutput([ eval(output.join(""))]);
      } catch {
        setOutput(["Error"]);
      }
    }
    else if(value==="|"){
      setOutput(prev => prev.slice(0, -1));
    }
    else {
      setOutput((prev) => [...prev, value]);
    }
  }

  return (
    <div>
      <div className="cal">
        <h2>{output}</h2>
      </div>

      <div>
        <button onClick={() => calc("1")}>1</button>
        <button onClick={() => calc("2")}>2</button>
        <button onClick={() => calc("3")}>3</button>
        <button onClick={() => calc("4")}>4</button>
        <button onClick={() => calc("5")}>5</button>
        <button onClick={() => calc("6")}>6</button>
        <button onClick={() => calc("7")}>7</button>
        <button onClick={() => calc("8")}>8</button>
        <button onClick={() => calc("9")}>9</button>
        <button onClick={() => calc("0")}>0</button>
        <button onClick={() => calc("+")}>+</button>
        <button onClick={() => calc("-")}>-</button>
        <button onClick={() => calc("*")}>*</button>
        <button onClick={() => calc("/")}>/</button>
        <button onClick={() => calc("=")}>=</button>
        <button onClick={() => calc("|")}>|</button>
        <button onClick={() => calc(".")}>.</button>

        <button onClick={() => setOutput([])}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
