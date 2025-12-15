import { useMemo } from 'react';
import * as d3 from 'd3';
import { AxisBottom, AxisBottomGood } from './AxisBottom';
import { AxisLeft, AxisLeftGood } from './AxisLeft';
import { MultiSeries, Series } from './data';
import { cn } from '@/util/utils';

const MARGIN = { top: 120, right: 140, bottom: 100, left: 90 };
const COLORS = [
  '#c23b3b', // End Relationship
  '#1f77b4', // Communicate
  '#2ca02c', // Give Space / Time
  '#ff7f0e', // Set / Respect Boundaries
  '#9467bd', // Seek Therapy
  '#17becf', // Compromise
  '#7f7f7f', // Other
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
  hasGoodAuthorLabel: boolean;
  hasGoodTitleWording: boolean;
  hasGoodTitleAlignment: boolean;
  hasBackground: boolean;
  isLabelOverlapFixed: boolean;
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
  hasGoodAuthorLabel,
  hasGoodTitleWording,
  hasGoodTitleAlignment,
  hasBackground,
  isLabelOverlapFixed,
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

  // nudge Scale
  const nudgeScale = d3
    .scaleOrdinal()
    .domain(allSeries.map((s) => s.name))
    .range([0, -2, 8, -3, 4, 7, -3]);

  const opacityScale = d3
    .scaleOrdinal()
    .domain(allSeries.map((s) => s.name))
    .range([1, 1, 0.4, 0.4, 0.4, 0.4, 0.4]);

  // Color palette matching the PNG
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allSeries.map((s) => s.name))
    .range(COLORS);

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
        y={
          yScale(last.y) +
          (isLabelOverlapFixed ? Number(nudgeScale(s.name)) : 0)
        }
        fontSize={12}
        fill={colorScale(s.name) ?? '#000'}
        alignmentBaseline="central"
        opacity={hasHighlight ? Number(opacityScale(s.name)) : 1}
        className="transition-opacity duration-1000"
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

  const title = (
    <g>
      <text
        x={hasGoodTitleAlignment ? MARGIN.left : MARGIN.left + 8}
        y={hasGoodTitleAlignment ? MARGIN.top - 60 : MARGIN.top - 40}
        fontSize={hasGoodTitleAlignment ? 22 : 16}
        color="black"
        fontWeight="bold"
      >
        {hasGoodTitleWording
          ? 'You should just end up your relationship!'
          : '15 Years of Reddit Relationship Advice (1,166,592 comments)'}
      </text>
      <text
        x={hasGoodTitleAlignment ? MARGIN.left : MARGIN.left + 15}
        y={hasGoodTitleAlignment ? MARGIN.top - 30 : MARGIN.top - 12}
        fontSize={hasGoodTitleAlignment ? 14 : 10}
        color="grey"
      >
        {hasGoodTitleWording
          ? "At least that's what people advise more and more on Reddit"
          : 'Data Source: r/relationship_advice (5,012,500 posts, 52,685,657 comments) filtered for quality'}
      </text>
    </g>
  );

  const authorAnnotation = hasGoodAuthorLabel ? (
    <text x={0} y={boundsHeight + 50} fontSize={10} textAnchor="start">
      Created by ui/GeargeDaGreat123
    </text>
  ) : (
    <text x={boundsWidth - 2} y={14} fontSize={10} textAnchor="end">
      created by ui/GeargeDaGreat123
    </text>
  );

  const getOpacityClass = (bol: boolean) => {
    return cn(
      'transition-opacity duration-1000',
      bol ? 'opacity-100' : 'opacity-0'
    );
  };

  const allLines = allSeries.map((s) => {
    const path = lineBuilder(s.values);
    if (!path) return null;
    return (
      <path
        key={s.name}
        d={path}
        fill="none"
        stroke={colorScale(s.name) ?? '#000'}
        strokeWidth={2}
        opacity={hasHighlight ? Number(opacityScale(s.name)) : 1}
        className="transition-opacity duration-1000"
      />
    );
  });

  return (
    <svg width={width} height={height} className="overflow-visible">
      <g className={getOpacityClass(hasBackground)}>
        <rect width={width} height={height} fill="#f9f9ff" />
      </g>

      {title}

      {/* Axes + grid + author annotation */}
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        <g className={getOpacityClass(hasGoodYAxis)}>
          <AxisLeftGood
            yScale={yScale}
            pixelsPerTick={100}
            width={boundsWidth}
          />
        </g>
        <g className={getOpacityClass(!hasGoodYAxis)}>
          <AxisLeft yScale={yScale} pixelsPerTick={30} width={boundsWidth} />
        </g>
      </g>

      <g transform={`translate(${MARGIN.left}, ${MARGIN.top + boundsHeight})`}>
        <g className={getOpacityClass(hasGoodXAxis)}>
          <AxisBottomGood
            xScale={xScale}
            pixelsPerTick={40}
            height={boundsHeight}
            hasGrid={hasGrid}
          />
        </g>
        <g className={getOpacityClass(!hasGoodXAxis)}>
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={30}
            height={boundsHeight}
            hasGrid={hasGrid}
          />
        </g>
      </g>

      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {allLines}

        {/* Legend (simple) */}
        <g className={getOpacityClass(hasLegend)}>{legend}</g>
        <g className={getOpacityClass(!hasLegend)}>{allLabels}</g>
      </g>

      {/* Spine */}
      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        <g className={getOpacityClass(hasSpine)}>
          <rect
            width={boundsWidth}
            height={boundsHeight}
            stroke={'black'}
            opacity={1}
            fill="none"
          />
        </g>
      </g>

      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {authorAnnotation}
      </g>
    </svg>
  );
};
