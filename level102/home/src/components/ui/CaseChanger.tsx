import { useState } from 'react';

export default function CaseChanger() {

  const [text, Text] = useState("Gia Suramelashvili");


  const Upper = () => {
    Text(text.toUpperCase());
  };


  const Lower = () => {
    Text(text.toLowerCase());
  };

  return (
    <div>
    
      <p>{text}</p>

      
      <button onClick={Upper} >
        UPPER
      </button>
      
      <button onClick={Lower}>
        lower
      </button>
    </div>
  );
};

