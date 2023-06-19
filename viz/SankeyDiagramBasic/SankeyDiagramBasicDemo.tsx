import { data } from "./data";
import { Sankey } from "./Sankey";

export const SankeyDiagramBasicDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <Sankey data={data} width={width} height={height} />;
};
