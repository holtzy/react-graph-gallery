import { useMemo } from 'react';
import * as d3 from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };
const BUCKET_NUMBER = 20;
const BUCKET_PADDING = 2;

const COLORS = ['#6689c6', '#9a6fb0'];

type HistogramProps = {
  width: number;
  height: number;
  data: { name: string; values: number[] }[];
};

export const Histogram = ({ width, height, data }: HistogramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  //
  // X Scales
  //
  const maxPerGroup = data.map((group) => Math.max(...group.values));
  const xScale = d3
    .scaleLinear()
    .domain([0, Math.max(...maxPerGroup)])
    .range([10, boundsWidth])
    .nice();

  //
  // Binning
  //
  const bucketGenerator = useMemo(() => {
    return d3
      .bin()
      .value((d) => d)
      .domain(xScale.domain() as [number, number])
      .thresholds(xScale.ticks(BUCKET_NUMBER));
  }, [xScale]);

  const bucketsTop = bucketGenerator(data[0].values);
  const bucketsBottom = bucketGenerator(data[1].values);

  //
  // Y Scale is created after binning: we need to know what the biggest bin is to compute the Y axis!
  //
  const maxTopBins = Math.max(...bucketsTop.map((bucket) => bucket?.length));
  const yScaleTop = d3
    .scaleLinear()
    .range([boundsHeight / 2, 0])
    .domain([0, maxTopBins])
    .nice();

  const maxBottomBins = Math.max(
    ...bucketsBottom.map((bucket) => bucket?.length)
  );
  const yScaleBottom = d3
    .scaleLinear()
    .range([boundsHeight / 2, boundsHeight])
    .domain([0, maxBottomBins])
    .nice();

  //
  // Draw the bars
  //
  const allRectsTop = bucketsTop.map((bucket, i) => {
    const { x0, x1 } = bucket;
    if (x0 == undefined || x1 == undefined) {
      return null;
    }
    return (
      <rect
        key={i}
        fill={COLORS[0]}
        opacity={0.7}
        x={xScale(x0) + BUCKET_PADDING / 2}
        width={xScale(x1) - xScale(x0) - BUCKET_PADDING}
        y={yScaleTop(bucket.length)}
        height={yScaleTop(0) - yScaleTop(bucket.length)}
      />
    );
  });

  const allRectsBottom = bucketsBottom.map((bucket, i) => {
    const { x0, x1 } = bucket;
    if (x0 == undefined || x1 == undefined) {
      return null;
    }
    return (
      <rect
        key={i}
        fill={COLORS[1]}
        opacity={0.7}
        x={xScale(x0) + BUCKET_PADDING / 2}
        width={xScale(x1) - xScale(x0) - BUCKET_PADDING}
        y={yScaleBottom(0)}
        height={yScaleBottom(bucket.length) - yScaleBottom(0)}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
      >
        {/* Y axis */}
        <AxisLeft yScale={yScaleTop} pixelsPerTick={40} width={boundsWidth} />
        <AxisLeft
          yScale={yScaleBottom}
          pixelsPerTick={60}
          width={boundsWidth}
        />

        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={60}
            height={boundsHeight}
          />
        </g>
        {allRectsTop}
        {allRectsBottom}
      </g>
    </svg>
  );
};
