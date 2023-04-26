import { data } from "./data";
import { Voronoi } from "./Voronoi";

export const VoronoidelaunayOnlyDemo = ({ width = 700, height = 400 }) => {
  if (width === 0 || height === 0) {
    return null;
  }

  return (
    <div>
      <Voronoi width={width} height={height} data={data} />
    </div>
  );
};
