import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['cart']); // Add more cookie names as needed

  const updateCookie = (name, value, options) => {
    setCookie(name, value, options);
  };

  // updateCookie('cart', '{}', { "path": "/" })

  return (
    <CookieContext.Provider value={{ cookies, updateCookie }}>
      {children}
    </CookieContext.Provider>
  );
};

export default CookieProvider;
