import type { Moment } from "moment";
import type GraphEntry from "./GraphEntry";
import type Selection from "./Selection";

type PosterData = {
  birthday: Moment;
  graphData: GraphEntry[];
  name: string;
  selection: Selection | null;
};

export {
  type PosterData as default
};
