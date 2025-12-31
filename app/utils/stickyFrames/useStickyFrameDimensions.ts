import { useContext } from 'react';
import stickyFrameDimensionsContext, {
  type ContextValue,
} from './stickyFrameDimensionsContext';

const useStickyFrameDimensions = (name: string) => {
  const contextValue = useContext(stickyFrameDimensionsContext)!;

  const getDimensions = (
    contextValue: ContextValue,
  ): NonNullable<ContextValue>['dimensions'][string] => {
    if (!contextValue) {
      return {
        heightPx: 0,
        widthPx: 0,
      };
    }

    if (contextValue.dimensions[name]) {
      return contextValue.dimensions[name];
    }

    return getDimensions(contextValue.parent);
  };

  const resut = getDimensions(contextValue);

  return resut;
};

export default useStickyFrameDimensions;
