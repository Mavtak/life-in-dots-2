import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Life In Dots" },
    { name: "description", content: "see your life represented as a finite sequence of dots" },
  ];
}

export default function Home() {
  return <Welcome />;
}
