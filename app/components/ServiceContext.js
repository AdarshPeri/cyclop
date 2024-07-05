'use client';
import { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  return (
    <ServiceContext.Provider value={{ openServiceIndex, setOpenServiceIndex }}>
      {children}
    </ServiceContext.Provider>
  );
};

const useService = () => {
  const context = useContext(ServiceContext);
  if (context === undefined)
    throw new Error('Context was used outside provider');
  return context;
};

export { ServiceContextProvider, useService };
