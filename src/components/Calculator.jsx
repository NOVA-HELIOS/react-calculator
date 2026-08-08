import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const buttons = [
  { value: "7", type: "number" },
  { value: "8", type: "number" },
  { value: "9", type: "number" },
  { value: "/", type: "operator" },
  { value: "4", type: "number" },
  { value: "5", type: "number" },
  { value: "6", type: "number" },
  { value: "*", type: "operator" },
  { value: "1", type: "number" },
  { value: "2", type: "number" },
  { value: "3", type: "number" },
  { value: "-", type: "operator" },
  { value: "0", type: "number" },
  { value: "C", type: "clear" },
  { value: "=", type: "equals" },
  { value: "+", type: "operator" },
];

function Calculator() {
  const [display, setDisplay] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const calculate = (first, second, selectedOperator) => {
    switch (selectedOperator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second === 0 ? "Error" : first / second;
      default:
        return second;
    }
  };

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      if (waitingForSecondNumber || display === "Error") {
        setDisplay(value);
        setWaitingForSecondNumber(false);
      } else {
        setDisplay(display + value);
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (display === "" || display === "Error") return;

      setFirstNumber(Number(display));
      setOperator(value);
      setWaitingForSecondNumber(true);
      return;
    }

    if (value === "=") {
      if (firstNumber === null || operator === null || display === "") {
        return;
      }

      const secondNumber = Number(display);
      const result = calculate(firstNumber, secondNumber, operator);

      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setWaitingForSecondNumber(false);
      return;
    }

    if (value === "C") {
      setDisplay("");
      setFirstNumber(null);
      setOperator(null);
      setWaitingForSecondNumber(false);
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />

      <div className="buttons">
        {buttons.map(({ value, type }) => (
          <Button
            key={value}
            value={value}
            type={type}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;