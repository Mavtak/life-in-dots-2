import { createContext } from 'react';

export type ContextValue = {
  banner: {
    isOpen: boolean;
    setIsOpen: (newIsOpen: boolean) => void;
  };
};

const defaultValue: ContextValue = {
  banner: {
    isOpen: false,
    setIsOpen: () => {
      throw new Error('not implemented');
    },
  },
};

const developmentToolsContext = createContext<ContextValue>(defaultValue);

export default developmentToolsContext;
