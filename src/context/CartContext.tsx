"use client"
import { createContext, Dispatch, SetStateAction, useState} from "react";

export const CartContext = createContext<[{id:number,count : number}[],Dispatch<SetStateAction<{id:number,count : number}[]>>]>([
  [],
  () => {},
]);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<{id:number,count : number}[]>([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};