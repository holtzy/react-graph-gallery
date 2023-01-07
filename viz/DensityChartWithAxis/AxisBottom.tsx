import { useMemo } from "react";
import { ScaleLinear } from "d3";

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }: AxisBottomProps) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
