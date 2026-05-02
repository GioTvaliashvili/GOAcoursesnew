import  { createContext, useState,  } from 'react';
import { ReactNode } from 'react';

interface AdviceSlip {
  id: number;
  advice: string;
}


interface AdviceContextType {
  advice: string;
  fetchAdvice: () => Promise<void>;
  isLoading: boolean;
}

export const AdviceContext = createContext<AdviceContextType | undefined>(undefined);

export const AdviceProvider = ({ children }: { children: ReactNode }) => {
  const [advice, setAdvice] = useState<string>("click me");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      const slip: AdviceSlip = data.slip;
      setAdvice(slip.advice);
    } catch (error) {
      setAdvice("შეცდომა რექვესტისას...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdviceContext.Provider value={{ advice, fetchAdvice, isLoading }}>
      {children}
    </AdviceContext.Provider>
  );
};