import * as d3 from "d3";

type VerticalViolinShapeProps = {
  data: number[];
  binNumber: number;
  yScale: d3.ScaleLinear<number, number, never>;
  width: number;
};

export const VerticalViolinShape = ({
  data,
  yScale,
  width,
  binNumber,
}: VerticalViolinShapeProps) => {
  const min = Math.min(...data);
  const max = Math.max(...data);

  const binBuilder = d3
    .bin()
    .domain([min, max])
    .thresholds(yScale.ticks(binNumber))
    .value((d) => d);
  const bins = binBuilder(data);

  const biggestBin = Math.max(...bins.map((b) => b.length));

  const wScale = d3
    .scaleLinear()
    .domain([-biggestBin, biggestBin])
    .range([0, width]);

  const areaBuilder = d3
    .area<d3.Bin<number, number>>()
    .x0((d) => wScale(-d.length))
    .x1((d) => wScale(d.length))
    .y((d) => yScale(d.x0 || 0))
    .curve(d3.curveBumpY);

  const areaPath = areaBuilder(bins);

  return (
    <path
      d={areaPath || undefined}
      opacity={1}
      stroke="#9a6fb0"
      fill="#9a6fb0"
      fillOpacity={0.1}
      strokeWidth={2}
    />
  );
};
