import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-box
          color="red"
          position="0 2 -5"
          rotation="0 45 45"
          scale="2 2 2"
        ></a-box>
      </a-scene>
    </div>
  );
}

export default App;
