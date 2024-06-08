import React, { useState } from "react";

function App() {
      /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");
/* You will need some function to handle the key pressed and button events */
  const onA = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setA(value);
    } else {
      setA(0);
    }
  };

  const onB = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setB(value);
    } else {
      setB(0);
    }
  };

  const compute = () => {
    const sum = a + b;
    if (isNaN(sum)) {
      setResult("Error: Invalid input");
      return;
    }
    setResult(sum.toFixed(2));
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

          <label>A + B =</label>
           {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} style={{ color: result.startsWith("Error") ? "red" : "inherit" }} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;