import {
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import useEffectOnUnmount from '../useEffectOnUnmount';
import stickyFrameItemsContext from './stickyFrameItemsContext';

type Props = {
  children: ReactNode;
  target: string;
  weight?: number;
};

const StickyFrameContent = ({ children, target, weight = 0 }: Props) => {
  const { setItem } = useContext(stickyFrameItemsContext)!;
  const keyRef = useRef<string | null>(null);

  useEffect(() => {
    keyRef.current = setItem({
      key: keyRef.current,
      node: children,
      target,
      weight,
    });
  }, [
    children,
    setItem,
    target,
    weight,
  ]);

  useEffectOnUnmount(() => {
    setItem({
      key: keyRef.current,
      node: null,
      target,
      weight,
    });

    keyRef.current = null;
  });

  return null;
};

export default StickyFrameContent;
