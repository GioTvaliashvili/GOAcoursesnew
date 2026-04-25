import { CartProvider } from './CartContext';
import { ProductList } from './ProductList';
import {ShoppingCart} from './ShoppingCart.tsx';

const App = () => {
  return (
    <CartProvider>
      <div style={{ padding: '20px' }}>
        <h1>ჩემი მაღაზია</h1>
        <ProductList />
        <hr />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};

export default App;