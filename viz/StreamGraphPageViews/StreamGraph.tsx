import * as d3 from "d3";
import { curveCatmullRom } from "d3";
import { pivotWider, WideDataItem } from "./utils";
import { TimeGrid } from "./TimeGrid";
import { Labels } from "./Labels";
import { Cursor } from "./Cursor";
import { useState } from "react";

const MARGIN = { top: 10, right: 250, bottom: 90, left: 0 };

export const parseTime = d3.timeParse("%Y-%m-%d");

// Long format received as a prop
export type DataItem = {
  date: string;
  group: string;
  value: number;
  startDate: Date;
};

type StreamGraphProps = {
  width: number;
  height: number;
  data: DataItem[];
  startDate: Date;
};

export const StreamGraph = ({
  width,
  height,
  data,
  startDate,
}: StreamGraphProps) => {
  const [interactionData, setInteractionData] = useState<WideDataItem | null>(
    null
  );

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const filteredData = data.filter((d) => parseTime(d.date) > startDate);
  const biggestValue = d3.max(filteredData.map((d) => d.value));

  const allGroups = [...new Set(data.map((d) => d.group))];

  // Pivot the data: long to wide format
  const wideData = pivotWider(filteredData);

  // Data Wrangling: stack the data
  const stackSeries = d3
    .stack()
    .keys(allGroups)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetSilhouette);
  const series = stackSeries(wideData);

  // Y axis
  const yValues = series.flatMap((s) => s.map((d) => d[1])); // Extract the upper values of each data point in the stacked series
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([boundsHeight, 0]);

  // X axis
  const dateDomain = d3.extent(filteredData.map((d) => parseTime(d.date)));
  const xScale = d3.scaleTime().domain(dateDomain).range([0, boundsWidth]);

  // Color
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  // Build the streamgraph shapes
  const areaBuilder = d3
    .area<any>()
    .x((d) => {
      return xScale(parseTime(d.data.date));
    })
    .y1((d) => yScale(d[1]))
    .y0((d) => yScale(d[0]))
    .curve(curveCatmullRom);

  const allPath = series.map((serie, i) => {
    const path = areaBuilder(serie);
    return (
      <path
        key={i}
        d={path}
        opacity={1}
        stroke="grey"
        fill={colorScale(serie.key)}
        fillOpacity={0.8}
      />
    );
  });

  const labelInfos = series.map((sery) => {
    const lastItem = sery[sery.length - 1];

    const value = interactionData
      ? interactionData[sery.key]
      : lastItem[1] - lastItem[0];

    return {
      name: sery.key,
      color: colorScale(sery.key),
      value,
      position: yScale((lastItem[0] + lastItem[1]) / 2),
    };
  });

  /**
   *function that takes the cursor position in pixel and return the closest data point
   */
  const getClosestPoint = (cursorPixelPosition: number) => {
    const x = xScale.invert(cursorPixelPosition);

    let minDistance = Infinity;
    let closest: WideDataItem | null = null;

    for (const point of wideData) {
      const cursorTime = parseTime(point.date)?.getTime();

      if (!cursorTime) {
        return null;
      }

      const distance = Math.abs(cursorTime - x.getTime());

      if (distance < minDistance) {
        minDistance = distance;
        closest = point;
      }
    }

    return closest;
  };

  /**
   * function triggered when cursor moves above the chart
   * it finds the closest point in the dataset and update the interactionData internal state
   * this will update the cursor position and the size of the bars on the right hand side
   */
  const onMouseMove = (e: React.MouseEvent<SVGRectElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const closest = getClosestPoint(mouseX);
    setInteractionData(closest);
  };

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <TimeGrid xScale={xScale} height={boundsHeight} />
          <Labels
            labelInfos={labelInfos}
            xStart={xScale.range()[1]}
            xEnd={width}
            biggestValue={biggestValue}
          />
          {allPath}
          {interactionData && (
            <Cursor
              height={boundsHeight}
              x={xScale(parseTime(interactionData.date))}
              biggestValue={biggestValue}
            />
          )}
          {/* Additional rect on top of everything to catch mouse events */}
          <rect
            x={0}
            y={0}
            width={boundsWidth}
            height={boundsHeight}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setInteractionData(null)}
            visibility={"hidden"}
            pointerEvents={"all"}
            cursor={"pointer"}
          />
        </g>
      </svg>
    </div>
  );
};
