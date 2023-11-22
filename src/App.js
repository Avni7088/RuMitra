// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [machineryList, setMachineryList] = useState([
    { id: 1, name: 'Tractor', hourlyRate: 20 },
    { id: 2, name: 'Harvester', hourlyRate: 30 },
    // Add more machinery as needed
  ]);

  const [selectedMachinery, setSelectedMachinery] = useState(null);
  const [rentalHours, setRentalHours] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [renterName, setRenterName] = useState('');
  const [rentalLocation, setRentalLocation] = useState('');

  const handleMachineryChange = (machineryId) => {
    const selected = machineryList.find((machinery) => machinery.id === machineryId);
    setSelectedMachinery(selected);
  };

  const handleHoursChange = (e) => {
    const hours = parseInt(e.target.value, 10);
    setRentalHours(hours || 1);
  };

  const handleNameChange = (e) => {
    setRenterName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setRentalLocation(e.target.value);
  };

  const calculateTotalCost = () => {
    if (selectedMachinery) {
      const cost = selectedMachinery.hourlyRate * rentalHours;
      setTotalCost(cost);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Farmer Machinery Rental</h1>
      </header>

      <div className="rental-form">
        <label>Select Machinery:</label>
        <select onChange={(e) => handleMachineryChange(parseInt(e.target.value, 10))}>
          <option value="">Select Machinery</option>
          {machineryList.map((machinery) => (
            <option key={machinery.id} value={machinery.id}>
              {machinery.name}
            </option>
          ))}
        </select>

        {selectedMachinery && (
          <div>
            <label>Enter Rental Hours:</label>
            <input type="number" min="1" value={rentalHours} onChange={handleHoursChange} />
          </div>
        )}

        <div>
          <label>Your Name:</label>
          <input type="text" value={renterName} onChange={handleNameChange} />
        </div>

        <div>
          <label>Rental Location:</label>
          <input type="text" value={rentalLocation} onChange={handleLocationChange} />
        </div>

        <button onClick={calculateTotalCost}>Calculate Total Cost</button>

        {totalCost > 0 && (
          <div>
            <h2>Total Cost: ${totalCost}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
