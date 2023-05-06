import React, { useState, useEffect } from 'react';

function Background() {
      const [color, setColor] = useState('#FFFFFF');
    
     //Create a generate random color function
    
      function handleColorChange() {
        // Function to handle the colour change event
        setColor('#FFFFFF');
      }
    
      useEffect(() => {
        // Set the background color of the page when the color state changes
        document.body.style.backgroundColor = color;
      }, []);
    
      return (
        <div>
          <button onClick={handleColorChange} data-cy="change-color-button">
            Change Color
          </button>
        </div>
      );
    }
    
export default Background;
