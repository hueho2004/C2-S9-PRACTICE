import React, { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
    /* You will need to use a boolean state to keep the value of the text entered */
  /* You will need a function to handle a key pressed on the first input and update the state*/
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label htmlFor="input-text">Enter any text:</label>
      <input id="input-text" type="text" onChange={handleInputChange} />

      <p>
          {/* This input will need to display the text entered in lower case */}
        <label htmlFor="output-text">Here is the text in upper case:</label>
        <input id="output-text" type="text" disabled value={inputText.toUpperCase()} />
      </p>
    </main>
  );
}
export default App;
