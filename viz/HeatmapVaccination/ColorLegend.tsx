import { InteractionData } from "./Heatmap";
import styles from "./color-legend.module.css";
import * as d3 from "d3";
import { COLORS, THRESHOLDS } from "./constants";
import { useEffect, useRef } from "react";

type ColorLegendProps = {
  interactionData: InteractionData | null;
  height: number;
  width: number;
  data: { x: number; y: string; value: number | null }[];
};

const COLOR_LEGEND_MARGIN = { top: 10, right: 10, bottom: 50, left: 50 };

export const ColorLegend = ({
  interactionData,
  height,
  data,
  width,
}: ColorLegendProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const boundsWidth =
    width - COLOR_LEGEND_MARGIN.right - COLOR_LEGEND_MARGIN.left;
  const boundsHeight =
    height - COLOR_LEGEND_MARGIN.top - COLOR_LEGEND_MARGIN.bottom;

  // Color scale
  const [min, max] = d3.extent(data.map((d) => d.value));
  const colorScale = d3
    .scaleLinear<string>()
    .domain(THRESHOLDS.map((t) => t * max))
    .range(COLORS);

  const xScale = d3.scaleLinear().range([0, boundsWidth]).domain([0, max]);

  const allTicks = xScale.ticks(6).map((tick) => {
    return (
      <>
        <line
          x1={xScale(tick)}
          x2={xScale(tick)}
          y1={0}
          y2={boundsHeight + 10}
          stroke="black"
        />
        <text x={xScale(tick)} y={boundsHeight + 20} fontSize={9}>
          {tick}
        </text>
      </>
    );
  });

  const triangle = <circle cx={xScale(interactionData?.value)} cy={0} r={3} />;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) {
      return;
    }

    for (let i = 0; i < boundsWidth; ++i) {
      context.fillStyle = colorScale((max * i) / boundsWidth);
      context.fillRect(i, 0, 1, boundsHeight);
    }
  }, [width, height]);

  return (
    <>
      <div style={{ position: "absolute" }}>
        <canvas ref={canvasRef} width={boundsWidth} height={boundsHeight} />
      </div>
      <div style={{ position: "absolute" }}>
        <svg width={width} height={height}>
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[
              COLOR_LEGEND_MARGIN.left,
              COLOR_LEGEND_MARGIN.top,
            ].join(",")})`}
          >
            {allTicks}
            {triangle}
          </g>
        </svg>
      </div>
    </>
  );
};
