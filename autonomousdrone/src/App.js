import React from 'react';
import './App.css';
import MapComponent from './webGL'; // Ensure this path matches the location of your file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Map App</h1>
      </header>
      <MapComponent /> {/* This is where the MapComponent is rendered */}
    </div>
  );
}

export default App;