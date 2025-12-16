import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Life In Dots" },
    { name: "description", content: "see your life represented as a finite sequence of dots" },
  ];
};

const Home = () => {
  return <Welcome />;
};

export default Home;
