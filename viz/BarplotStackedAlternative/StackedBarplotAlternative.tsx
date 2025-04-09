import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { DataItem, Group, Subgroup } from './data';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type Props = {
  width: number;
  height: number;
  data: DataItem[];
};

export const StackedBarplotAlternative = ({ width, height, data }: Props) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups: Group[] = data.map((d) => d.group);
  const allSubgroups: Subgroup[] = Object.keys(data[0]).filter(
    (key) => key !== 'group'
  );

  const totalsPerGroup = data.map((d) => {
    const { group, ...segments } = d;
    const total = Object.values(segments).reduce(
      (sum, value) => sum + value,
      0
    );
    return { group, total };
  });

  // X scale for main groups
  const xScaleGroups = d3
    .scaleBand<Group>()
    .domain(allGroups)
    .range([0, boundsWidth])
    .padding(0.2);

  // X scale for subgroups within each group
  const xScaleSubgroups = d3
    .scaleBand<Subgroup>()
    .domain(allSubgroups)
    .range([0, xScaleGroups.bandwidth()])
    .padding(0.05);

  // Y scale
  const maxY = d3.max(totalsPerGroup, (d) => d.total) ?? 0;

  const yScale = d3
    .scaleLinear()
    .domain([0, maxY])
    .range([boundsHeight, 0])
    .nice();

  // Color scale based on segment
  const color = d3
    .scaleOrdinal<Subgroup, string>()
    .domain(allSubgroups)
    .range(['#28B463', '#F39C12', '#3498DB']);

  // Axes
  useEffect(() => {
    const svg = d3.select(axesRef.current);
    svg.selectAll('*').remove();

    const xAxis = d3.axisBottom(xScaleGroups);
    svg
      .append('g')
      .attr('transform', `translate(0, ${boundsHeight})`)
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append('g').call(yAxis);
  }, [xScaleGroups, yScale, boundsHeight]);

  // Group Bars
  const groupBars = totalsPerGroup.map((grp) => {
    return (
      <rect
        key={grp.group}
        x={xScaleGroups(grp.group)}
        y={yScale(grp.total)}
        width={xScaleGroups.bandwidth()}
        height={yScale(0) - yScale(grp.total)}
        fill="#e0e0e0"
        rx={2}
      />
    );
  });

  // Subgroup Bars
  const bars = data.map((group, i) => {
    return (
      <g key={i} transform={`translate(${xScaleGroups(group.group)}, 0)`}>
        {allSubgroups.map((key) => (
          <rect
            key={key}
            x={xScaleSubgroups(key)}
            y={yScale(group[key])}
            width={xScaleSubgroups.bandwidth()}
            height={boundsHeight - yScale(group[key])}
            fill={color(key)}
          />
        ))}
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {groupBars}
        {bars}
      </g>
      <g ref={axesRef} transform={`translate(${MARGIN.left},${MARGIN.top})`} />
    </svg>
  );
};
