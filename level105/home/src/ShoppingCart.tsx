import { useContext } from 'react';
import { CartContext } from './CartContext';

export const ShoppingCart = () => {
  const context = useContext(CartContext);
  if (!context) return null;

  return (
    <div>
      <h2>კალათა ({context.cart.length})</h2>
      <ul>
        {context.cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.prise} ₾
          </li>
        ))}
      </ul>
    </div>
  );
};