import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { DataItem, Group, Subgroup } from './data';
import { MARGIN, allSubgroups, colorScale } from './utils';

type Props = {
  width: number;
  height: number;
  data: DataItem[];
  highlightedSubgroup: Subgroup;
};

export const StackedBarplotAlternative = ({
  width,
  height,
  data,
  highlightedSubgroup,
}: Props) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups: Group[] = data.map((d) => d.group);

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
    .paddingOuter(0.4)
    .paddingInner(0.1);

  // Y scale
  const maxY = d3.max(totalsPerGroup, (d) => d.total) ?? 0;

  const yScale = d3
    .scaleLinear()
    .domain([0, maxY])
    .range([boundsHeight, 0])
    .nice();

  // Axes
  useEffect(() => {
    const svg = d3.select(axesRef.current);
    svg.selectAll('*').remove();
    const yAxis = d3.axisLeft(yScale);
    svg.append('g').call(yAxis);
  }, [yScale, boundsHeight]);

  // X axis
  const xAxis = xScaleGroups.domain().map((grp) => {
    return (
      <text
        x={xScaleGroups(grp) + xScaleGroups.bandwidth() / 2}
        y={boundsHeight + 20}
        textAnchor="middle"
        fontSize={14}
        letterSpacing={1.1}
      >
        {grp}
      </text>
    );
  });

  // Group Bars (grey background)
  const groupBars = totalsPerGroup.map((grp) => {
    return (
      <>
        <rect
          key={grp.group}
          x={xScaleGroups(grp.group)}
          y={yScale(grp.total)}
          width={xScaleGroups.bandwidth()}
          height={yScale(0) - yScale(grp.total)}
          fill="#e0e0e0"
          rx={2}
        />
        <text
          x={xScaleGroups(grp.group) + xScaleGroups.bandwidth() / 2}
          y={yScale(grp.total) - 4}
          fontSize={12}
          textAnchor="middle"
          fill="grey"
        >
          {grp.total}
        </text>
      </>
    );
  });

  // Subgroup Bars
  const bars = data.map((group, i) => {
    return (
      <g key={i} transform={`translate(${xScaleGroups(group.group)}, 0)`}>
        {allSubgroups.map((key) => {
          const x = xScaleSubgroups(key);
          if (!x) {
            return;
          }

          return (
            <g
              opacity={
                highlightedSubgroup === key ? 1 : highlightedSubgroup ? 0.2 : 1
              }
            >
              <rect
                key={key}
                x={x}
                y={yScale(group[key])}
                width={xScaleSubgroups.bandwidth()}
                height={boundsHeight - yScale(group[key])}
                fill={colorScale(key)}
              />
              <text
                x={x + xScaleSubgroups.bandwidth() / 2}
                y={yScale(group[key]) - 4}
                fontSize={12}
                textAnchor="middle"
              >
                {group[key]}
              </text>
            </g>
          );
        })}
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {xAxis}
        {groupBars}
        {bars}
      </g>
      <g ref={axesRef} transform={`translate(${MARGIN.left},${MARGIN.top})`} />
    </svg>
  );
};
