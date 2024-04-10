import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="gray" onClick={clearDisplay}>
            AC
          </button>
          <button className="gray" onClick={() => handleClick("/")}>
            ÷
          </button>
          <button className="gray" onClick={() => handleClick("*")}>
            ×
          </button>
          <button className="gray" onClick={() => handleClick("-")}>
            −
          </button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="orange" onClick={() => handleClick("+")}>
            +
          </button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="orange" onClick={calculateResult}>
            =
          </button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="zero" onClick={() => handleClick("0")}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
