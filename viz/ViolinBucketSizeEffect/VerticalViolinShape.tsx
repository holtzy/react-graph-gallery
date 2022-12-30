import * as d3 from "d3";

type VerticalViolinShapeProps = {
  data: number[];
  binNumber: number;
  yScale: d3.ScaleLinear<number, number, never>;
  width: number;
  fill: string;
  smoothing: boolean;
  bucketNumber: number;
};

export const VerticalViolinShape = ({
  data,
  yScale,
  width,
  binNumber,
  fill,
  smoothing,
  bucketNumber,
}: VerticalViolinShapeProps) => {
  const min = Math.min(...data);
  const max = Math.max(...data);

  console.log("yScale.ticks(binNumber)", yScale.ticks(binNumber));
  const binBuilder = d3
    .bin()
    .thresholds(bucketNumber)
    .domain([min, max])
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
    .curve(smoothing ? d3.curveBumpY : d3.curveStep);

  const areaPath = areaBuilder(bins);

  return (
    <path
      d={areaPath || undefined}
      opacity={1}
      stroke="black"
      fill={fill}
      fillOpacity={1}
      strokeWidth={1}
    />
  );
};
