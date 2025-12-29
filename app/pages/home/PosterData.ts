import type { Moment } from "moment";
import type GraphEntry from "./GraphEntry";

type PosterData = {
  birthday: Moment;
  graphData: GraphEntry[];
  name: string;
};

export {
  type PosterData as default
};
