import usePosterData from '~/data/usePosterData';
import Poster from './Poster';

const Page = () => {
  const [posterData, setPosterData] = usePosterData();

  return (
    <main>
      <Poster onUpdate={setPosterData} value={posterData} />
    </main>
  );
};

export default Page;
