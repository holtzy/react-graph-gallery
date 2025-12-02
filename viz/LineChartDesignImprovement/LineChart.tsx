import { useMemo } from 'react';
import * as d3 from 'd3';
import { AxisBottom, AxisBottomGood } from './AxisBottom';
import { AxisLeft, AxisLeftGood } from './AxisLeft';
import { MultiSeries, Series } from './data';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };
const COLORS = [
  '#c23b3b', // End Relationship
  '#1f77b4', // Communicate
  '#2ca02c', // Give Space / Time
  '#ff7f0e', // Set / Respect Boundaries
  '#9467bd', // Seek Therapy
  '#17becf', // Compromise
  '#7f7f7f', // Other
];
const COLORS_HIGHLIGHT = [
  '#c23b3b', // End Relationship
  '#1f77b4', // Communicate
  '#D3D3D3', // Give Space / Time
  '#D3D3D3', // Set / Respect Boundaries
  '#D3D3D3', // Seek Therapy
  '#D3D3D3', // Compromise
  '#D3D3D3', // Other
];

type LineChartProps = {
  width: number;
  height: number;
  data: MultiSeries;
  hasSpine: boolean;
  hasLegend: boolean;
  hasHighlight: boolean;
  hasGrid: boolean;
  hasGoodYAxis: boolean;
  hasGoodXAxis: boolean;
};

export const LineChart = ({
  width,
  height,
  data,
  hasSpine,
  hasLegend,
  hasHighlight,
  hasGrid,
  hasGoodYAxis,
  hasGoodXAxis,
}: LineChartProps) => {
  // Convert nested object into list of series
  const allSeries: Series[] = useMemo(() => {
    return Object.entries(data).map(([name, entries]) => {
      const values = Object.entries(entries).map(([year, value]) => ({
        x: Number(year),
        y: value,
      }));
      return { name, values };
    });
  }, [data]);

  // Flatten all data points
  const flat = allSeries.flatMap((s) => s.values);

  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X scale (years)
  const xExtent = d3.extent(flat, (d) => d.x) as [number, number];
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain(xExtent).range([0, boundsWidth]);
  }, [flat, width]);

  // Y scale (percent)
  const yMax = d3.max(flat, (d) => d.y) ?? 0;
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, yMax]).range([boundsHeight, 0]);
  }, [flat, height]);

  // Color palette matching the PNG
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allSeries.map((s) => s.name))
    .range(hasHighlight ? COLORS_HIGHLIGHT : COLORS);

  // Line generator
  const lineBuilder = d3
    .line<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const allLabels = allSeries.map((s, i) => {
    const last = s.values[s.values.length - 1];
    return (
      <text
        key={i}
        x={boundsWidth + 5}
        y={i === 2 ? yScale(last.y) + 15 : yScale(last.y)}
        fontSize={12}
        fill={colorScale(s.name) ?? '#000'}
        alignmentBaseline="central"
      >
        {s.name}
      </text>
    );
  });

  const legend = (
    <g transform={`translate(10, 10)`}>
      {allSeries.map((s, i) => (
        <g key={s.name} transform={`translate(0, ${i * 13})`}>
          <rect width={20} height={10} fill={colorScale(s.name) ?? '#000'} />
          <text x={28} y={10} fontSize={12}>
            {s.name}
          </text>
        </g>
      ))}
    </g>
  );

  return (
    <svg width={width} height={height} className="overflow-visible">
      {/* Axes + grid */}
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {hasGoodYAxis ? (
          <AxisLeftGood
            yScale={yScale}
            pixelsPerTick={100}
            width={boundsWidth}
          />
        ) : (
          <AxisLeft yScale={yScale} pixelsPerTick={30} width={boundsWidth} />
        )}
      </g>
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top + boundsHeight})`}>
        {hasGoodXAxis ? (
          <AxisBottomGood
            xScale={xScale}
            pixelsPerTick={40}
            height={boundsHeight}
            hasGrid={hasGrid}
          />
        ) : (
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={40}
            height={boundsHeight}
            hasGrid={hasGrid}
          />
        )}
      </g>

      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {/* Lines */}
        {allSeries.map((s) => {
          const path = lineBuilder(s.values);
          if (!path) return null;
          return (
            <path
              key={s.name}
              d={path}
              fill="none"
              stroke={colorScale(s.name) ?? '#000'}
              strokeWidth={2}
              opacity={1}
            />
          );
        })}

        {/* Legend (simple) */}
        {hasLegend && legend}
        {!hasLegend && allLabels}
      </g>

      {/* Spine */}
      {hasSpine && (
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          <rect
            width={boundsWidth}
            height={boundsHeight}
            stroke={'black'}
            opacity={1}
            fill="none"
          />
        </g>
      )}
    </svg>
  );
};
