import { data } from "./data";
import { Voronoi } from "./Voronoi";

export const VoronoiBasicDemo = ({ width = 700, height = 400 }) => (
  <div style={{ marginTop: 20, marginBottom: 20 }}>
    <Voronoi width={width} height={height - 40} data={data} />
  </div>
);
