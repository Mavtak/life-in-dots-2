import { useEffect, useMemo, useState, type ReactNode } from 'react';
import developmentToolsContext, { type ContextValue } from './developmentToolsContext';

type Props = {
  children: ReactNode;
};

const DevelopmentToolsProvider = ({ children }: Props) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const handleOnKeyDown = (event: KeyboardEvent) => {
      const isMatch = event.ctrlKey && event.key === '`';

      if (!isMatch) {
        return;
      }

      event.preventDefault();

      setIsBannerOpen((oldIsBannerOpen) => {
        return !oldIsBannerOpen;
      });
    };

    document.addEventListener('keydown', handleOnKeyDown);

    return () => document.removeEventListener('keydown', handleOnKeyDown);
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
