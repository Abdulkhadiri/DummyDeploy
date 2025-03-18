// src/App.tsx
import React from 'react';
import './App.css';
import SecondHandCars from './components/SecondHandCars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Second Hand Cars</h1>
      </header>
      <main>
        <SecondHandCars />
      </main>
    </div>
  );
}

export default App;