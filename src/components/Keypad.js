import React from 'react';

const Keypad = () => {
  // Event handler for when the input field changes
  const handleInputChange = (event) => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password"
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
    </div>
  );
};

export default Keypad