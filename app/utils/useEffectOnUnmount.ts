import {
  useEffect,
  useRef,
} from 'react';

const useEffectOnUnmount = (fun: () => void) => {
  const funRef = useRef<() => void>(null);

  // eslint-disable-next-line
  funRef.current = fun;

  useEffect(() => () => funRef.current!(), []);
};

export default useEffectOnUnmount;
