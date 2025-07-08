"use client";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { useContext, useEffect } from "react";
export default function Product({id, name,image } : {
    id : number,
    name : string,
    image : string,
}) {
    const [ cart, setCart ] = useContext(CartContext);
    console.log(cart);
  const addToCart = () => {
    const existingItem = cart.find((item)=>item.id ===id);
    if(existingItem){
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    }else{
      setCart([...cart,{id,count:1}]);
    }
  };
  useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="group flex flex-col items-center p-4 border shadow hover:shadow-lg transition-shadow bg-white rounded-2xl">
  <Image
    width={20}
    height={20}
    src={image}
    alt={name}
    className="w-40 h-40 object-cover"
  />
  <h3 className="mt-2 font-semibold">{name}</h3>
      {/* <button className="absolute inset-0 bg-black bg-opacity-100 group-hover:bg-opacity-50 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-semibold">Add to Cart</span>
    </button> */}
    <button className="mt-2 bg-black text-white py-1 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={addToCart}>
    Add to Cart
  </button> 
      {/* <p className="text-gray-600">${price.toFixed(2)}</p>
      <p className="text-yellow-500">{'★'.repeat(Math.round(rating))}</p>
      <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button> */}
    </div>
  );
}