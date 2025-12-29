import moment from "moment";
import { useState } from "react";
import getPosterData from "./getPosterData";
import Poster from "./Poster";

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
  const [posterData, setPosterData] = useState(getDefaultPosterData);

  return (
    <main>
      <Poster onUpdate={setPosterData} value={posterData} />
    </main>
  );
};

export default Page;
