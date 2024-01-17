
import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['cart']); // Add more cookie names as needed

  const updateCookie = (name, value, options) => {
    setCookie(name, value, options);
  };

  const setCartCookie = (cart) => {
    updateCookie('cart', JSON.stringify(cart), { path: '/' }); // Convert cart object to JSON string
  };

  return (
    <CookieContext.Provider value={{ cookies, updateCookie, setCartCookie }}>
      {children}
    </CookieContext.Provider>
  );
};

export default CookieProvider;
