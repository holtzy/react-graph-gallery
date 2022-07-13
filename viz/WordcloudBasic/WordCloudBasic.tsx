import { data } from "./data";
import { Wordcloud } from "./Wordcloud";

export const WordcloudBasicDemo = ({ width = 700, height = 400 }) => (
  <Wordcloud width={width} height={height} data={data} />
);
