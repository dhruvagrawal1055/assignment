import React, { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState('#FFFFFF');

  function generateRandomColor() {
    // Generate a random hex color code
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }

  function handleColorChange() {
    // Update the color state with a new random color
    const newColor = generateRandomColor();
    setColor(newColor);
  }

  useEffect(() => {
    // Set the background color of the page when the color state changes
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={handleColorChange} data-cy="change-color-button">
        Change Color
      </button>
    </div>
  );
}

export default App;
