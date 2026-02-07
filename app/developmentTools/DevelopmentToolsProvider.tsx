import { useMemo, useState, type ReactNode } from 'react';
import developmentToolsContext, { type ContextValue } from './developmentToolsContext';
import useKeyboardShortcut from '~/utils/useKeyboardShortcut';

type Props = {
  children: ReactNode;
};

const DevelopmentToolsProvider = ({ children }: Props) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useKeyboardShortcut({
    altKey: false,
    ctrlKey: true,
    key: '`',
    metaKey: false,
    shiftKey: false,
  }, () => {
    setIsBannerOpen((oldIsBannerOpen) => {
      return !oldIsBannerOpen;
    });
  });

  const contextValue = useMemo(() => {
    const result: ContextValue = {
      banner: {
        isOpen: isBannerOpen,
        setIsOpen: setIsBannerOpen,
      },
    };

    return result;
  }, [isBannerOpen]);

  return (
    <developmentToolsContext.Provider value={contextValue}>
      {children}
    </developmentToolsContext.Provider>
  );
};

export default DevelopmentToolsProvider;
