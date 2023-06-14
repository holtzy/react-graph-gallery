import { data } from "./data";
import { ArcDiagram } from "./ArcDiagram";

export const ArcDiagramBasicDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <ArcDiagram data={data} width={width} height={height} />;
};
