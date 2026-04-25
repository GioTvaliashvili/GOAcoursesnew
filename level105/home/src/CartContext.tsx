import  { createContext, useState, } from 'react';
import { ReactNode } from 'react';


interface CartItem {
  name: string;
  prise: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};