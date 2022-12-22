import { useMemo } from "react";
import * as d3 from "d3";
import { getSummaryStats } from "./summary-stats";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottomCategoric";
import { VerticalBox } from "./VerticalBox";
import { VerticalViolinShape } from "./VerticalViolinShape";

const MARGIN = { top: 20, right: 30, bottom: 50, left: 50 };
const JITTER_WIDTH = 40;
const COLORS = ["#e85252", "#6689c6", "#9a6fb0", "#a53253"];

type BoxplotViolinMirrorProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
  mirrorPosition: number;
  smoothing: boolean;
};

export const BoxplotViolinMirror = ({
  width,
  height,
  data,
  mirrorPosition,
  smoothing,
}: BoxplotViolinMirrorProps) => {
  const boundsWidth = useMemo(() => {
    return width - MARGIN.right - MARGIN.left;
  }, [width]);
  const boundsHeight = useMemo(() => {
    return height - MARGIN.top - MARGIN.bottom;
  }, [height]);

  // Compute everything derived from the dataset:
  const { chartMin, chartMax, groups } = useMemo(() => {
    const [chartMin, chartMax] = d3.extent(data.map((d) => d.value)) as [
      number,
      number
    ];
    const groups = [...new Set(data.map((d) => d.name))];
    return { chartMin, chartMax, groups };
  }, [data]);

  //
  // Scales
  //
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([chartMin, chartMax])
      .range([boundsHeight, 0])
      .nice();
  }, [data, height]);

  const xScale = useMemo(() => {
    return d3.scaleBand().range([0, boundsWidth]).domain(groups).padding(0.15);
  }, [data, width]);

  const colorScale = useMemo(() => {
    return d3.scaleOrdinal<string>().domain(groups).range(COLORS);
  }, [data]);

  //
  // Boxplot boxes (with jittering on top)
  //
  const allBoxes = useMemo(() => {
    return groups.map((group, i) => {
      const groupData = data
        .filter((d) => d.name === group)
        .map((d) => d.value);
      const sumStats = getSummaryStats(groupData);

      if (!sumStats) {
        return null;
      }

      const { min, q1, median, q3, max } = sumStats;

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            width: xScale.bandwidth(),
            height: boundsHeight,
            left: xScale(group),
          }}
        >
          <svg height={boundsHeight} width={xScale.bandwidth()}>
            <VerticalBox
              width={xScale.bandwidth()}
              q1={yScale(q1)}
              median={yScale(median)}
              q3={yScale(q3)}
              min={yScale(min)}
              max={yScale(max)}
              stroke="black"
              fill={colorScale(group)}
            />
            {groupData.map((value, i) => (
              <circle
                key={i}
                cx={
                  xScale.bandwidth() / 2 -
                  JITTER_WIDTH / 2 +
                  Math.random() * JITTER_WIDTH
                }
                cy={yScale(value)}
                r={2}
                fill="grey"
                stroke="black"
                strokeOpacity={0.2}
                fillOpacity={0.3}
              />
            ))}
          </svg>
        </div>
      );
    });
  }, [data, xScale, yScale]);

  //
  // Violins (with variable width for mirror move)
  //
  const allViolins = groups.map((group, i) => {
    const groupData = data.filter((d) => d.name === group).map((d) => d.value);
    return (
      <div key={i}>
        <div
          style={{
            position: "absolute",
            top: 0,
            width: mirrorPosition * xScale.bandwidth(),
            height: boundsHeight,
            left: xScale(group),
            backgroundColor: "#f9f9fa",
            overflow: "hidden",
            borderRight: "solid #e5e5e5 2px",
          }}
        >
          <svg height={boundsHeight} width={xScale.bandwidth()}>
            <VerticalViolinShape
              data={groupData}
              binNumber={10}
              yScale={yScale}
              width={xScale.bandwidth()}
              fill={colorScale(group)}
              smoothing={smoothing}
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div style={{ position: "relative", width, height }}>
      <div style={{ width, height, position: "absolute", top: 0, left: 0 }}>
        <div
          style={{
            width: boundsWidth,
            height: boundsHeight,
            transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
          }}
        >
          {allBoxes}
          {allViolins}
        </div>
      </div>
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <AxisLeft yScale={yScale} pixelsPerTick={30} />
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} />
          </g>
        </g>
      </svg>
    </div>
  );
};
