import { HoveredCell } from "./Heatmap";

type TooltipProps = {
  hoveredCell: HoveredCell | null;
  width: number;
  height: number;
};

export const Tooltip = ({ hoveredCell, width, height }: TooltipProps) => {
  if (!hoveredCell) {
    return null;
  }

  return (
    // Wrapper div: a rect on top of the viz area
    <div
      style={{
        width,
        height,
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      {/* The actual box with dark background */}
      <div
        style={{
          position: "absolute",
          left: hoveredCell.xPos,
          top: hoveredCell.yPos,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          border: "black",
          borderRadius: "4px",
          color: "white",
          fontSize: 16,
          padding: 4,
          marginLeft: 4,
          transform: "translateY(-50%)",
        }}
      >
        <TooltipRow label={"x"} value={hoveredCell.xLabel} />
        <TooltipRow label={"y"} value={hoveredCell.yLabel} />
        <TooltipRow label={"value"} value={String(hoveredCell.value)} />
      </div>
    </div>
  );
};

type TooltipRowProps = {
  label: string;
  value: string;
};
const TooltipRow = ({ label, value }: TooltipRowProps) => (
  <div>
    <b>{label}</b>
    <span>: </span>
    <span>{value}</span>
  </div>
);
