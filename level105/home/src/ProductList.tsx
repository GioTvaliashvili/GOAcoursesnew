import { useContext } from 'react';
import { CartContext } from './CartContext';

export const  ProductList = () => {
  const context = useContext(CartContext);
  if (!context) return null;

  return (
    <button onClick={() => context.addToCart({ name: "apple", prise: 21 })}>
      დაამატე ვაშლი (21 ₾)
    </button>
  );
};
