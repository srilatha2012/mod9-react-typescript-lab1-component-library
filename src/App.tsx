import { useState } from 'react';
import './App.css'
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  inStock: true
};
function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        > 
        <p className="text-sm text-gray-500 mt-2">
            Free shipping available
        </p>
        </ProductDisplay>
      </div>
    </div>

  )
}

export default App
