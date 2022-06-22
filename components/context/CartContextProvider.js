import React, { useState, useReducer } from "react";

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
      }
      return {
        ...state,
      };
    case "INCREASE":
      const increase = state.products.findIndex(
        (item) => item === action.payload.id
      );
      state.products[increase].quantity++;
      return {
        ...state,
      };

    case "DECREASE":
      const decrease = state.products.findIndex(
        (item) => item === action.payload.id
      );
      state.products[decrease].quantity--;
      return {
        ...state,
      };

    case "REMOVEITEM":
      const newProductsList = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: [...newProductsList],
      };

    case "CHECKOUT":
      return {
        products: [],
        checkout: true,
      };
  }
};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return( 
  <cartContext.Provider value={{state , dispatch}}>
      {children}
  </cartContext.Provider>
  )
};

export default CartContextProvider;
