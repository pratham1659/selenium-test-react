import React, { useState } from "react";
import "./styles.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = evaluate(displayValue);
        const newHistory = [...history, `${displayValue} = ${result}`];
        setHistory(newHistory);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "C") {
      setDisplayValue("");
    } else if (value === "CE") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
    }
  };

  return (
    <div className="calculator">
      <div className="history-box">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="display">{displayValue || "0"}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="orange" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="orange" onClick={() => handleButtonClick("*")}>
            x
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="orange" onClick={() => handleButtonClick("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("CE")}>CE</button>
          <button className="orange" onClick={() => handleButtonClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
