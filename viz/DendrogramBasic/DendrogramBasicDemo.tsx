import { data } from "./data";
import { Dendrogram } from "./Dendrogram";

export const DendrogramBasicDemo = ({ width = 700, height = 400 }) => {
  if (!width) {
    return null;
  }
  return <Dendrogram data={data} width={width} height={height} />;
};
