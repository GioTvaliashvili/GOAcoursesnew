import React, { createContext, useState, } from 'react';
import ChildComponent from './ChildComponent.tsx'; // მაგალითისთვის


type Theme = "Light" | "Dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const App = () => {

  const [theme, setTheme] = useState<Theme>("Light");


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        backgroundColor: theme === "Light" ? "#fff" : "#333", 
        color: theme === "Light" ? "#000" : "#fff",
        height: "100vh" 
      }}>
        <h1>მთავარი კომპონენტი</h1>
        <button onClick={toggleTheme}>შეცვალე თემა</button>
        
        {/* ყველა შვილ კომპონენტს ექნება წვდომა კონტექსტზე */}
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;