import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 10, bottom: 40, left: 40 };
const BUCKET_NUMBER = 20;
const BUCKET_PADDING = 1;
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

type HistogramProps = {
  width: number;
  height: number;
  data: { group: string; values: number[] }[];
};

type SingleHistogramProps = {
  width: number;
  height: number;
  data: number[];
  color: string;
  xRange: [number, number];
};

const SingleHistogram = ({
  width,
  height,
  data,
  color,
  xRange,
}: SingleHistogramProps) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain(xRange).range([0, boundsWidth]);
  }, [data, width]);

  const buckets = useMemo(() => {
    const bucketGenerator = d3
      .bin()
      .value((d) => d)
      .domain(xRange)
      .thresholds(xScale.ticks(BUCKET_NUMBER));
    return bucketGenerator(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...buckets.map((bucket) => bucket?.length));
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

  const allRects = buckets.map((bucket, i) => {
    return (
      <rect
        key={i}
        fill={color}
        x={xScale(bucket.x0) + BUCKET_PADDING / 2}
        width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
        y={yScale(bucket.length)}
        height={boundsHeight - yScale(bucket.length)}
      />
    );
  });

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

export const Histogram = ({ width, height, data }: HistogramProps) => {
  const allGroups = data.map((group) => group.group);
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);

  const maxPerGroup = data.map((group) => Math.max(...group.values));
  const max = Math.max(...maxPerGroup);

  return (
    <div style={{ width, height, display: "flex" }}>
      {data.map((group, i) => (
        <SingleHistogram
          key={i}
          width={width / allGroups.length}
          height={height}
          color={colorScale(group.group)}
          xRange={[0, max]}
          data={group.values}
        />
      ))}
    </div>
  );
};
