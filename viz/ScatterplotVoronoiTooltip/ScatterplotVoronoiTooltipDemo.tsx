import { data } from './data';
import { Scatterplot } from './Scatterplot';

export const ScatterplotVoronoiTooltipDemo = ({
  width = 700,
  height = 400,
}) => {
  if (width === 0 || height === 0) {
    return null;
  }

  return (
    <div>
      <Scatterplot width={width} height={height} data={data} />
    </div>
  );
};
