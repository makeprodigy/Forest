import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return initialState;
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    console.log('addToCart called with:', product);
    if (!product || !product.id) {
      console.error('Product missing id:', product);
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const increment = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  return (
    <CartContext.Provider value={{ cart: state.items, addToCart, removeFromCart, clearCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
} 