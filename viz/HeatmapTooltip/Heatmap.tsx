import { useState } from "react";
import { Renderer } from "./Renderer";
import { Tooltip } from "./Tooltip";

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number | null }[];
};

export type HoveredCell = {
  xLabel: string;
  yLabel: string;
  xPos: number;
  yPos: number;
  value: number;
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  const [hoveredCell, setHoveredCell] = useState<HoveredCell | null>(null);

  return (
    <div style={{ position: "relative" }}>
      <Renderer
        width={width}
        height={height}
        data={data}
        setHoveredCell={setHoveredCell}
      />
      <Tooltip hoveredCell={hoveredCell} width={width} height={height} />
    </div>
  );
};
