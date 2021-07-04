import React from "react";
import { Badge, Center, NativeBaseProvider } from "native-base";

import { useSelector } from "react-redux";

function Cart() {
  const state = useSelector((state) => {
    return {
      cartItem: state.Category.cart,
    };
  });

  return (
    <NativeBaseProvider>
      {state.cartItem.map((item) => {
        <Badge>{item.name}</Badge>;
      })}
    </NativeBaseProvider>
  );
}

export default Cart;
