'use client';
import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined)
    throw new Error('Context was used outside provider');
  return context;
};

export { NavContextProvider, useNav };
