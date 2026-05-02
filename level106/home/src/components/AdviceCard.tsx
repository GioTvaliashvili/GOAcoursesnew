import React, { useContext } from 'react';
import { AdviceContext } from './AdviceContext';

const AdviceCard: React.FC = () => {
  const context = useContext(AdviceContext);

  // TypeScript-ის Guard
  if (!context) {
    return null;
  }

  const { advice, fetchAdvice, isLoading } = context;

  return (
    <div className="card">
      <h1>Daily Advice</h1>
      <div className="advice-text">
        <p>{isLoading ? "იტვირთება..." : `"${advice}"`}</p>
      </div>
      <button onClick={fetchAdvice} disabled={isLoading}>
        {isLoading ? "Thinking..." : "Get New Advice 🎲"}
      </button>
    </div>
  );
};

export default AdviceCard;