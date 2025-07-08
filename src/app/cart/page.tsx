'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/CartContext';
import { filterProducts } from '@/lib/utils';
import Image from 'next/image';

export default function Page() {
  const [cart, setCart] = useContext(CartContext);
  let total = 0;

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const router = useRouter();
  const products = filterProducts("");
  const cartItems = cart.map((item) => ({
    ...products.find((p)=>p.id===item.id),
    count : item.count
  }));

  cartItems.forEach((item) => {
    if(!item || !item.price)return;
    
    if (item) total += item.price * item.count;
  });

  const removeFromCart = (id:number | undefined) => {
    
    const existingItem = cart.find((item) => item.id === id);
    if(!existingItem)return;
    if (existingItem.count > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const updateQuantity = (id: number | undefined, delta: number) => {
    const item = cartItems.find((i) => i?.id === id);
    if(!id)return;
    const existingItem = cart.find((item)=>item.id ===id);
    if (item) {
      if (delta === -1 && cart.length > 1) {
        
        if(existingItem){
          setCart(
            cart.map((item) =>
              item.id === id ? { ...item, count: item.count - 1 } : item
            )
          );
        }else{
          setCart([...cart]);
        }
      } else if (delta === 1) {
        if(existingItem){
          setCart(
            cart.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            )
          );
        }else{
          setCart([...cart]);
        }
      }
    }
  };

  return (
  <div className="flex flex-col min-h-screen container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

    <div className="flex-grow">
      {cartItems.length === 0 ? (
        <p className="text-center">
          Your cart is empty.{' '}
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:underline"
          >
            Continue Shopping
          </button>
        </p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item) => {
            if (!item) return null;
            return (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image
                    src={item.image ? item.image : ""}
                    alt={item.name + ""}
                    width={64}
                    height={64}
                    className="object-fill mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Size: 9</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gray-200 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">{cart.find((pro) => pro.id === item.id)?.count}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gray-200 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {item.price && item.id && (
                    <>
                      <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>

    {cartItems.length > 0 && (
      <div className="mt-6 border-t pt-4">
        <p className="text-xl font-semibold text-right">Subtotal: ${total.toFixed(2)} USD</p>
        <p className="text-right">Shipping: FREE</p>
        <button className="mt-4 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 w-full">
          PROCEED TO CHECKOUT
        </button>
      </div>
    )}
  </div>
);

}