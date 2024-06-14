'use client';

import { createContext } from 'react';

export const PlaceholderContext = createContext();

export const PlaceholderProvider = ({ children }) => {
  return <PlaceholderContext.Provider value={{}}>{children}</PlaceholderContext.Provider>;
};
