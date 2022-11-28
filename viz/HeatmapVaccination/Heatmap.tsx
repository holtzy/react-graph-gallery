import { useState } from "react";
import { Renderer } from "./Renderer";
import { Tooltip } from "./Tooltip";
import { COLOR_LEGEND_HEIGHT } from "./constants";
import { ColorLegend } from "./ColorLegend";
import * as d3 from "d3";
import { COLORS, THRESHOLDS } from "./constants";

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: number; y: string; value: number | null }[];
};

export type InteractionData = {
  xLabel: string;
  yLabel: string;
  xPos: number;
  yPos: number;
  value: number;
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  const [hoveredCell, setHoveredCell] = useState<InteractionData | null>(null);

  // Color scale is computed here bc it must be passed to both the renderer and the legend
  const [min, max] = d3.extent(data.map((d) => d.value));
  const colorScale = d3
    .scaleLinear<string>()
    .domain(THRESHOLDS.map((t) => t * max))
    .range(COLORS);

  return (
    <div style={{ position: "relative" }}>
      <Renderer
        width={width}
        height={height - COLOR_LEGEND_HEIGHT}
        data={data}
        setHoveredCell={setHoveredCell}
      />
      <Tooltip
        interactionData={hoveredCell}
        width={width}
        height={height - COLOR_LEGEND_HEIGHT}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ColorLegend
          height={COLOR_LEGEND_HEIGHT}
          width={300}
          colorScale={colorScale}
          interactionData={hoveredCell}
        />
      </div>
    </div>
  );
};
