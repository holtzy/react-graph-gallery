import { data } from './data';
import { NetworkDiagram } from './NetworkDiagram';

export const NetworkDiagramLesMiserablesDemo = ({
  width = 700,
  height = 400,
}) => {
  if (width === 0) {
    return null;
  }
  return <NetworkDiagram data={data} width={width} height={height} />;
};
