// src/components/DarkModeToggle.js
import React, { useState } from 'react';

function DarkModeToggle({ toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;
