import React from "react";
import React, { useState } from 'react';

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [weather, setWeather]=useState(true)

  function onSunClick() {
    setWeather(false);
    // Complete this code when we click on Sunny Time
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setWeather(true);
  }

  function getTitle() {
    // This function manages the H1 text, depending on the weather
    if (weather) {
      return "Rainy Day"
    } else {
      return "Sunny Day"
    }
  }

  function getBackgroundColor() {
    // This function manages the main class value, depending on the weather
    if (weather) {
      return "main-rainy"
    } else {
      return "main-sunny"
    }
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;