import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img
            id="boxTexture"
            alt="boxTexture"
            src="https://i.imgur.com/mYmmbrp.jpg"
          />
        </a-assets>

        <a-box
          src="#boxTexture"
          position="0 2 -5"
          rotation="0 45 45"
          scale="2 2 2"
          animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
        ></a-box>

        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
