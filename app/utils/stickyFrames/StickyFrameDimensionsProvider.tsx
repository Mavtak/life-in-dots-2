import {
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import stickyFrameDimensionsContext, {
  type DimensionsByFrameName,
  type DimensionsUpdate,
} from './stickyFrameDimensionsContext';

type Props = {
  children: ReactNode;
};

const StickyFrameDimensionsProvider = ({ children }: Props) => {
  const parent = useContext(stickyFrameDimensionsContext);

  const [dimensions, setDimensions] = useState<DimensionsByFrameName>({});

  const handleChangeDimensions = useCallback(({
    target,
    value,
  }: DimensionsUpdate) => {
    setDimensions((oldDimensions) => {
      return {
        ...oldDimensions,
        [target]: value,
      };
    });
  }, []);

  return (
    <stickyFrameDimensionsContext.Provider
      value={{
        dimensions,
        onChangeDimensions: handleChangeDimensions,
        parent,
      }}
    >
      {children}
    </stickyFrameDimensionsContext.Provider>
  );
};

export default StickyFrameDimensionsProvider;
