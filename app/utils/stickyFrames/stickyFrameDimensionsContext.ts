import { createContext } from 'react';

export type Dimensions = {
  heightPx: number;
  widthPx: number;
};

export type DimensionsByFrameName = {
  [target: string]: Dimensions;
};

export type DimensionsUpdate = {
  target: string;
  value: Dimensions;
};

export type ContextValue = {
  dimensions: DimensionsByFrameName;
  onChangeDimensions: (update: DimensionsUpdate) => void;
  parent: ContextValue;
} | null;

const defaultValue: ContextValue = null;

const stickyFrameDimensionsContext = createContext<ContextValue>(defaultValue);

export default stickyFrameDimensionsContext;
