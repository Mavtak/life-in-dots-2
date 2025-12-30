import type { Route } from './+types/home';
import HomePage from '../pages/home/Page';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'Life In Dots' },
    { name: 'description', content: 'see your life represented as a finite sequence of dots' },
  ];
};

const Home = () => {
  return <HomePage />;
};

export default Home;
