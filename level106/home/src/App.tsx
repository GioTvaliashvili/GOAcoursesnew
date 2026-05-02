import React from 'react';
import { AdviceProvider } from './AdviceContext';
import AdviceCard from './AdviceCard';
import './App.css';

const App: React.FC = () => {
  return (
    <AdviceProvider>
      <div className="App">
        <AdviceCard />
      </div>
    </AdviceProvider>
  );
};

export default App;