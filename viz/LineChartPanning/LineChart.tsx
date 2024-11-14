import { useRef, useState } from 'react';
import * as d3 from 'd3';
import { XAxis } from './XAxis';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: string; y: number };

type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // States for handling brushing and current scale
  const [isBrushing, setIsBrushing] = useState(false);
  const [brushStart, setBrushStart] = useState<number | null>(null);
  const [brushEnd, setBrushEnd] = useState<number | null>(null);

  // Y axis
  const max = d3.max(data, (d) => d.y);
  const yScale = d3
    .scaleLinear()
    .domain([0, max || 0])
    .range([boundsHeight, 0]);

  // X axis
  const customTimeParser = d3.timeParse('%Y-%m-%d');
  const times = data
    .map((d) => customTimeParser(d.x))
    .filter((item) => item instanceof Date) as Date[]; // filter is typed weirdly 🤔

  const dateDomain = d3.extent(times);

  const xScale = d3.scaleTime().domain(dateDomain).range([0, boundsWidth]);

  // Build the line
  const lineBuilder = d3
    .line<DataPoint>()
    .x((d) => xScale(customTimeParser(d.x)))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);

  // Mouse handlers for custom brushing
  const handleMouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    setIsBrushing(true);
    setBrushStart(event.nativeEvent.offsetX);
    setBrushEnd(null); // Reset brush end when starting a new brush
  };

  const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
    if (!isBrushing || brushStart === null) return;
    setBrushEnd(event.nativeEvent.offsetX);
  };

  const handleMouseUp = () => {
    if (isBrushing && brushStart !== null && brushEnd !== null) {
      const startX = Math.min(brushStart, brushEnd);
      const endX = Math.max(brushStart, brushEnd);
      // const newDomain = [currentXScale.invert(startX), currentXScale.invert(endX)];
      // setCurrentXScale(currentXScale.copy().domain(newDomain));
    }
    setIsBrushing(false);
    setBrushStart(null);
    setBrushEnd(null);
  };

  if (!linePath) {
    return null;
  }

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <path
            d={linePath}
            opacity={1}
            stroke="#9a6fb0"
            fill="none"
            strokeWidth={2}
          />
        </g>
        <g
          transform={`translate(${[MARGIN.left, boundsHeight + MARGIN.top].join(
            ','
          )})`}
        >
          <XAxis xScale={xScale} width={boundsWidth} />
        </g>
        {/* Brushing overlay */}
        <rect
          width={boundsWidth}
          height={boundsHeight}
          fill="transparent"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        {isBrushing && brushStart !== null && brushEnd !== null && (
          <rect
            x={Math.min(brushStart, brushEnd)}
            width={Math.abs(brushEnd - brushStart)}
            height={boundsHeight}
            fill="rgba(154, 111, 176, 0.3)"
          />
        )}
      </svg>
    </div>
  );
};
