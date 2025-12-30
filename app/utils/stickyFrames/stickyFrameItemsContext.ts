import {
  createContext,
  type ReactNode,
} from 'react';

export type Item = {
  key: any;
  node: ReactNode;
  target: string;
  weight: number;
};

export type HeightUpdate = {
  target: string;
  value: number;
};

export type ContextValue = {
  items: Item[];
  parent: ContextValue;
  setItem: (item: Item) => any;
} | null;

const defaultValue: ContextValue = null;

const stickyFrameItemsContext = createContext<ContextValue>(defaultValue);

export default stickyFrameItemsContext;
