import { InteractionData } from "./Heatmap";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

type ColorLegendProps = {
  height: number;
  width: number;
  colorScale: d3.ScaleLinear<string, string, never>;
  interactionData: InteractionData | null;
};

const COLOR_LEGEND_MARGIN = { top: 0, right: 0, bottom: 50, left: 0 };

export const ColorLegend = ({
  height,
  colorScale,
  width,
  interactionData,
}: ColorLegendProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const boundsWidth =
    width - COLOR_LEGEND_MARGIN.right - COLOR_LEGEND_MARGIN.left;
  const boundsHeight =
    height - COLOR_LEGEND_MARGIN.top - COLOR_LEGEND_MARGIN.bottom;

  const domain = colorScale.domain();
  const max = domain[domain.length - 1];
  const xScale = d3.scaleLinear().range([0, boundsWidth]).domain([0, max]);

  const allTicks = xScale.ticks(4).map((tick) => {
    return (
      <>
        <line
          x1={xScale(tick)}
          x2={xScale(tick)}
          y1={0}
          y2={boundsHeight + 10}
          stroke="black"
        />
        <text
          x={xScale(tick)}
          y={boundsHeight + 20}
          fontSize={9}
          textAnchor="middle"
        >
          {tick / 1000 + "k"}
        </text>
      </>
    );
  });

  const hoveredValue = interactionData?.value;
  const x = hoveredValue ? xScale(hoveredValue) : null;
  const triangleWidth = 9;
  const triangleHeight = 6;
  const triangle = x ? (
    <polygon
      points={`${x},0 ${x - triangleWidth / 2},${-triangleHeight} ${
        x + triangleWidth / 2
      },${-triangleHeight}`}
      fill="grey"
    />
  ) : null;

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
    <div style={{ width, height }}>
      <div
        style={{
          position: "relative",
          transform: `translate(${COLOR_LEGEND_MARGIN.left}px,
            ${COLOR_LEGEND_MARGIN.top}px`,
        }}
      >
        <canvas ref={canvasRef} width={boundsWidth} height={boundsHeight} />
        <svg
          width={boundsWidth}
          height={boundsHeight}
          style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
        >
          {allTicks}
          {triangle}
        </svg>
      </div>
    </div>
  );
};
