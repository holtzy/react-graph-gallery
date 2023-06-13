import { data } from "./data";
import { ChordDiagram } from "./ChordDiagram";

export const ChordDiagramRibbonDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <ChordDiagram data={data} width={width} height={height} />;
};
