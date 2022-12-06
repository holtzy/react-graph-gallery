import { useMemo } from "react";
import * as d3 from "d3";

const BUCKET_PADDING = 4;

type HistogramProps = {
  width: number;
  height: number;
  data: number[];
};

export const Histogram = ({ width, height, data }: HistogramProps) => {
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, 10])
      .range([10, width - 10]);
  }, [data, width]);

  const buckets = useMemo(() => {
    const bucketGenerator = d3
      .bin()
      .value((d) => d)
      .domain([0, 10])
      .thresholds([0, 2, 4, 6, 8, 10]);
    return bucketGenerator(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...buckets.map((bucket) => bucket?.length));
    return d3.scaleLinear().range([height, 0]).domain([0, max]);
  }, [data, height]);

  const allRects = buckets.map((bucket, i) => {
    if (bucket.x0 == undefined || bucket.x1 == undefined) {
      return null;
    }
    return (
      <rect
        key={i}
        fill="#69b3a2"
        stroke="black"
        x={xScale(bucket.x0) + BUCKET_PADDING / 2}
        width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
        y={yScale(bucket.length)}
        height={height - yScale(bucket.length)}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      {allRects}
    </svg>
  );
};
