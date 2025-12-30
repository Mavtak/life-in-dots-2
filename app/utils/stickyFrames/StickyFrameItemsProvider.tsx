import {
  type ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import stickyFrameItemsContext, { type Item } from './stickyFrameItemsContext';

type Props = {
  children: ReactNode;
};

const StickyFrameItemsProvider = ({ children }: Props) => {
  const parent = useContext(stickyFrameItemsContext);

  const [items, setItems] = useState<Item[]>([]);
  const lastKey = useRef(0);

  const handleAddItem = useCallback((item: Item) => {
    lastKey.current++;

    const key = lastKey.current;

    const newItem = {
      ...item,
      key,
    };

    setItems((existingItems) => [...existingItems, newItem]);

    return key;
  }, []);

  const handleDeleteItem = useCallback((key: any) => {
    setItems((existingItems) =>
      existingItems.filter((existingItem) => existingItem.key !== key),
    );
  }, []);

  const handleUpdateItem = useCallback(
    (updatedItem: Item) => {
      if (!updatedItem.key) {
        return handleAddItem(updatedItem);
      }
      const matchingItem = items.find(
        (existingItem) => existingItem.key === updatedItem.key,
      );

      if (!matchingItem) {
        throw new Error(`couldn't find sticky frame item with ID ${updatedItem.key}`);
      }

      if (
        matchingItem.node === updatedItem.node &&
        matchingItem.target === updatedItem.target &&
        matchingItem.weight === updatedItem.weight
      ) {
        return updatedItem.key;
      }

      setItems((existingItems) =>
        existingItems.map((existingItem) => {
          if (existingItem !== matchingItem) {
            return existingItem;
          }

          return updatedItem;
        }),
      );

      return updatedItem.key;
    },
    [handleAddItem, items],
  );

  const handleSetItem = useCallback(
    (item: Item) => {
      if (item.key) {
        if (item.node) {
          return handleUpdateItem(item);
        }

        return handleDeleteItem(item.key);
      }

      if (!item.node) {
        return null;
      }

      return handleAddItem(item);
    },
    [handleAddItem, handleDeleteItem, handleUpdateItem],
  );

  return (
    <stickyFrameItemsContext.Provider
      value={{
        items,
        parent,
        setItem: handleSetItem,
      }}
    >
      {children}
    </stickyFrameItemsContext.Provider>
  );
};

export default StickyFrameItemsProvider;
