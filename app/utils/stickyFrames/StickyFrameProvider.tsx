import type { ReactNode } from 'react';
import StickyFrameDimensionsProvider from './StickyFrameDimensionsProvider';
import StickyFrameItemsProvider from './StickyFrameItemsProvider';

type Props = {
  children: ReactNode;
};

const StickyFrameProvider = ({ children }: Props) => {
  return (
    <StickyFrameItemsProvider>
      <StickyFrameDimensionsProvider>
        {children}
      </StickyFrameDimensionsProvider>
    </StickyFrameItemsProvider>
  );
};

export default StickyFrameProvider;
