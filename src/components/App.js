import React from 'react';
import Keypad from './Keypad'; // Ensure the path matches the location of Keypad.js
import EyesOnMe from './EyesOnMe';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Nuclear Plant Keypad</h1>
      <Keypad />
      <EyesOnMe />
    </div>
  );
};

export default App