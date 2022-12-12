import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };
const BUCKET_NUMBER = 20;
const BUCKET_PADDING = 4;

const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

type HistogramProps = {
  width: number;
  height: number;
  data: { name: string; values: number[] }[];
};

export const Histogram = ({ width, height, data }: HistogramProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroupNames = data.map((group) => group.name);
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroupNames)
    .range(COLORS);

  const xScale = useMemo(() => {
    const maxPerGroup = data.map((group) => Math.max(...group.values));
    const max = Math.max(...maxPerGroup);
    return d3.scaleLinear().domain([0, max]).range([10, boundsWidth]).nice();
  }, [data, width]);

  const bucketGenerator = useMemo(() => {
    return d3
      .bin()
      .value((d) => d)
      .domain(xScale.domain() as [number, number])
      .thresholds(xScale.ticks(BUCKET_NUMBER));
  }, [xScale]);

  const groupBuckets = useMemo(() => {
    return data.map((group) => {
      return { name: group.name, buckets: bucketGenerator(group.values) };
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

  // Render the X axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const allRects = groupBuckets.map((group, i) =>
    group.buckets.map((bucket, j) => {
      const { x0, x1 } = bucket;
      if (x0 == undefined || x1 == undefined) {
        return null;
      }
      return (
        <rect
          key={i + "_" + j}
          fill={colorScale(group.name)}
          opacity={0.7}
          x={xScale(x0) + BUCKET_PADDING / 2}
          width={xScale(x1) - xScale(x0) - BUCKET_PADDING}
          y={yScale(bucket.length)}
          height={boundsHeight - yScale(bucket.length)}
        />
      );
    })
  );

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        {allRects}
      </g>
      <g
        width={boundsWidth}
        height={boundsHeight}
        ref={axesRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      />
    </svg>
  );
};
