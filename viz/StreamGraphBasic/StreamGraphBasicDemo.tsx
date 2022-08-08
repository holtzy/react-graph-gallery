import { data } from "./data";
import { StreamGraph } from "./StreamGraph";

export const StreamGraphBasicDemo = ({ width = 700, height = 400 }) => (
  <StreamGraph data={data} width={width} height={height} />
);
