import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleUnitChange = (e) => {
    const unit = e.target.value;
    setSelectedUnit(unit);
  };

  const convertTemperature = () => {
    if (selectedUnit === 'celsius') {
      return celsiusToFahrenheit(parseFloat(inputValue)).toFixed(2) + ' °F';
    } else {
      return fahrenheitToCelsius(parseFloat(inputValue)).toFixed(2) + ' °C';
    }
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <select value={selectedUnit} onChange={handleUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        </div>
        
        <p>{convertTemperature()}</p>
        </div>
  )
}
export default App;