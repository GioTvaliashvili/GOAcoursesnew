import React, { useContext } from 'react';

import { ThemeContext } from './App'; 

const ChildComponent = () => {

  const context = useContext(ThemeContext);

 
  if (!context) {
    return null; 
  }

  const { theme, toggleTheme } = context;

  const styles = {
    padding: '20px',
    margin: '20px',
    border: `2px solid ${theme === 'Light' ? '#333' : '#fff'}`,
    borderRadius: '8px'
  };

  return (
    <div style={styles}>
      <h3>მე ვარ შვილი კომპონენტი</h3>
      <p>აქაც ვიცი, რომ თემა არის: <b>{theme}</b></p>
      <button onClick={toggleTheme}>
        შეცვალე აქედანაც
      </button>
    </div>
  );
};

export default ChildComponent;