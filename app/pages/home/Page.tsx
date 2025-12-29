import moment from "moment";
import useStoredState from "~/utils/useStoredState";
import getPosterData from "./getPosterData";
import Poster from "./Poster";
import type PosterData from "./PosterData";

const convertPosterDataFromDeserializedValue = (deserializedValue: any) => {
  const result: PosterData = {
    ...deserializedValue,
    birthday: moment(deserializedValue.birthday),
  };

  return result;
};

const convertPosterDataToSerializableValue = (posterData: PosterData) => {
  const result: any = {
    ...posterData,
    birthday: posterData.birthday.format(),
  };

  return result;
};

const getDefaultPosterData = () => {
  const birthday = moment('1989-10-05');
  const name = 'David';
  const now = moment();

  const result =  getPosterData({
    birthday,
    maxAge: 90,
    now,
    name,
  });

  return result;
};

const Page = () => {
  const [posterData, setPosterData] = useStoredState({
    convertFromDeserializedValue: convertPosterDataFromDeserializedValue,
    convertToSerializableValue: convertPosterDataToSerializableValue,
    getDefaultValue: getDefaultPosterData,
    key: 'poster-data',
  });

  return (
    <main>
      <Poster onUpdate={setPosterData} value={posterData} />
    </main>
  );
};

export default Page;
