import { useEffect, useRef } from 'react';

type Input = {
  altKey: boolean,
  ctrlKey: boolean,
  key: string,
  metaKey: boolean,
  shiftKey: boolean,
};

const useKeyboardShortcut = ({
  altKey,
  ctrlKey,
  key,
  metaKey,
  shiftKey,
}: Input, fun: () => void,) => {
  const funRef = useRef<() => void>(fun);

  // eslint-disable-next-line
  funRef.current = fun;

  useEffect(() => {
    const handleOnKeyDown = (event: KeyboardEvent) => {
      if (event.altKey !== altKey) {
        return;
      }

      if (event.ctrlKey !== ctrlKey) {
        return;
      }

      if (event.metaKey !== metaKey) {
        return;
      }

      if (event.shiftKey !== shiftKey) {
        return;
      }

      if (event.key !== key) {
        return;
      }

      event.preventDefault();

      funRef.current();
    };

    document.addEventListener('keydown', handleOnKeyDown);

    return () => document.removeEventListener('keydown', handleOnKeyDown);
  }, [altKey, ctrlKey, key, metaKey, shiftKey]);
};

export default useKeyboardShortcut;
