/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Nothing from "./Nothing";

const Mycarts = () => {
  const cartItems = useLoaderData();
  const [total, setTotal] = useState(0);



  useEffect(() => {
    let semiTotal = 0;
    cartItems.forEach((cartItem) => {
      semiTotal += parseInt(cartItem.price);
    });
    setTotal(semiTotal);
  }, [cartItems]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
        {cartItems.length==0?<div className="flex justify-center items-center min-h-screen"> <Nothing></Nothing></div>:cartItems.map((phone, idx) => (
         <Cart key={idx} phone={phone}></Cart>
        ))
         
        }
       <div className="font-bold text-xl"> {cartItems.length==0?"":total}</div>
        
      </div>
      
    </div>
  );
};

export default Mycarts;
