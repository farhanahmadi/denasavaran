import React, { useState, useReducer, useEffect } from "react";

export const cartContext = React.createContext();

const initialState = {
  products: [],
  checkout: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDITEM":
      if (!state.products.find((item) => item.id === action.payload.id)) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        localStorage.setItem("userCartItems", JSON.stringify(initialState));
      }
      return {
        ...state,
      };
    case "INCREASE":
      const increase = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.products[increase].quantity++;
      localStorage.setItem("userCartItems", JSON.stringify(initialState));
      return {
        ...state,
      };

    case "DECREASE":
      const decrease = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(action.payload);
      state.products[decrease].quantity--;
      localStorage.setItem("userCartItems", JSON.stringify(initialState));
      return {
        ...state,
      };

    case "REMOVEITEM":
      const newProductsList = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "userCartItems",
        JSON.stringify({ products: [...newProductsList], checkout: false })
      );
      return {
        ...state,
        products: [...newProductsList],
      };

    case "CHECKOUT":
      localStorage.setItem(
        "userCartItems",
        JSON.stringify({ products: [], checkout: true })
      );
      return {
        products: [],
        checkout: true,
      };
  }
};

const CartContextProvider = ({ children }) => {
  useEffect(() => {
    if (
      localStorage.getItem("userCartItems") &&
      initialState.products.length <= 0
    ) {
      const data = JSON.parse(localStorage.getItem("userCartItems"));
      initialState.products.push(...data.products);
    }
  });

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
