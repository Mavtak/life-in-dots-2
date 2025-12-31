import { useState } from 'react';
import usePosterData from '~/data/usePosterData';
import Poster from './Poster';

const Page = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [posterData, setPosterData] = usePosterData();

  return (
    <main>
      <Poster
        isSelecting={isSelecting}
        onChangeIsSelecting={setIsSelecting}
        onUpdate={setPosterData}
        value={posterData}
      />
    </main>
  );
};

export default Page;
