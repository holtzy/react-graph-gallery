import * as d3 from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { Annotation } from './Annotation';
import styles from './scatterplot.module.css';

const MARGIN = { top: 0, right: 60, bottom: 60, left: 60 };
export const CIRCLE_COLOR = '#fdbdc5';

type DataPoint = {
  x: number;
  y: number;
  movingAverage: number | string;
};

type ScatterplotProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = d3.scaleLinear().domain([74, 125]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([801, 2024]).range([0, boundsWidth]);

  // Build the shapes
  const allCircles = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={3}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        stroke="red"
        fill={CIRCLE_COLOR}
        className={styles.circle}
      />
    );
  });

  // Build the line for moving average
  const lineBuilder = d3
    .line<DataPoint>()
    .defined((d) => typeof d.movingAverage === 'number') // some values are "" instead of numbers in the dataset
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.movingAverage));
  const linePath = lineBuilder(data);

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
      >
        {/* Annotation */}
        <Annotation xScale={xScale} boundsHeight={boundsHeight} />

        {/* Y axis */}
        <AxisLeft yScale={yScale} pixelsPerTick={49} width={boundsWidth} />

        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={40}
            height={boundsHeight}
          />
        </g>

        {/* Circles */}
        {allCircles}

        {/* Line Chart */}
        <path
          d={linePath}
          opacity={0.8}
          stroke="black"
          fill="none"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};
