import Poster from './Poster';
import usePosterData from './usePosterData';

const Page = () => {
  const [posterData, setPosterData] = usePosterData();

  return (
    <main>
      <Poster onUpdate={setPosterData} value={posterData} />
    </main>
  );
};

export default Page;
