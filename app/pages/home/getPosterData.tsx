import moment, { type Moment } from 'moment';
import type PosterData from './PosterData';
import type GraphEntry from './GraphEntry';

type Input = {
  birthday: Moment;
  maxAge: number,
  name: string;
  now: Moment;
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
        selection: null,
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