import { useMemo } from "react";
import * as d3 from "d3";
import { colors, MARGIN } from "./constants";
import { AxisBottom } from "./Axis/AxisBottom";

const BUCKET_NUMBER = 40;
const BUCKET_PADDING = 0;

type HistogramProps = {
  width: number;
  height: number;
  data: { group: string; values: number[] }[];
  limits: [number, number];
};

export const Histogram = ({ width, height, data, limits }: HistogramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = [...new Set(data.map((d) => d.group))].sort();
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(colors);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain(limits).range([10, boundsWidth]).nice();
  }, [data, width]);

  const bucketGenerator = useMemo(() => {
    return d3
      .bin()
      .value((d) => d)
      .domain(xScale.domain())
      .thresholds(xScale.ticks(BUCKET_NUMBER));
  }, [xScale]);

  const groupBuckets = useMemo(() => {
    return data.map((group) => {
      return { group, buckets: bucketGenerator(group.values) };
    });
  }, [data]);

  const yScale = useMemo(() => {
    const max = Math.max(
      ...groupBuckets.map((group) =>
        Math.max(...group.buckets.map((bucket) => bucket?.length))
      )
    );
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, max]).nice();
  }, [data, height]);

  const allRects = groupBuckets.map((group, i) =>
    group.buckets.map((bucket, j) => (
      <rect
        key={i + "_" + j}
        x={xScale(bucket.x0) + BUCKET_PADDING / 2}
        width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
        y={yScale(bucket.length)}
        height={boundsHeight - yScale(bucket.length)}
        fill={colorScale(group.group.group)}
        opacity={1}
      />
    ))
  );

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allRects}

        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom xScale={xScale} pixelsPerTick={20} />
        </g>
      </g>
    </svg>
  );
};
