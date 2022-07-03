import { useMemo, useState } from "react";
import * as d3 from "d3";
import { Renderer } from "./Renderer";
import { Tooltip } from "./Tooltip";

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

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
