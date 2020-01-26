import React from 'react';
import './App.css';
import Facebook from './components/Facebook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Facebook Auth Example</h1>
        <p> 
         To get started, authenticate with Facebook
        </p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
