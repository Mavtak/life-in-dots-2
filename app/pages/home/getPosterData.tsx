import moment, { type Moment } from "moment";

type Input = {
  birthday: Moment;
  maxAge: number,
  name: string;
  now: Moment;
};

export type GraphEntry = {
  age: number;
  hasPassed: boolean;
  isBirthWeek: boolean;
  weekNumber: number;
};

export type PosterData = {
  birthday: Moment;
  graphData: GraphEntry[];
  name: string;
};

const getLifeInDotsData = ({
  birthday,
  maxAge,
  name,
  now,
}: Input): PosterData => {
  const graphData: GraphEntry[] = [];

  let weekNumber = 0;

  while(true) {
    const beginningOfWeek = birthday.clone().add(weekNumber, 'weeks');
    const endOfWeek = beginningOfWeek.clone().add(1, 'week');
    const ageAteBeginningOfWeek = moment
      .duration(
        beginningOfWeek.diff(birthday)
      )
      .years();
    const ageAtEndOfWeek = moment
      .duration(
        endOfWeek.diff(birthday)
      )
      .years();

    if (ageAtEndOfWeek >= maxAge) {
      const result: PosterData = {
        birthday,
        graphData,
        name,
      };

      return result;
    }

    const isBirthWeek = weekNumber === 0 || ageAtEndOfWeek !== ageAteBeginningOfWeek;
    const hasPassed = endOfWeek.isBefore(now);
    const entry: GraphEntry = {
      age: ageAtEndOfWeek,
      hasPassed,
      isBirthWeek,
      weekNumber,
    };

    graphData.push(entry);

    weekNumber++;
  }
};

export default getLifeInDotsData;