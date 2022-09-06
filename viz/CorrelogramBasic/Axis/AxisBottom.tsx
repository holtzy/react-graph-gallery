import { useMemo } from "react";
import { ScaleLinear } from "d3";

import styles from "./axis.module.css";

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  label?: string;
};

// tick length
const TICK_LENGTH = 3;

export const AxisBottom = ({
  xScale,
  pixelsPerTick,
  label,
}: AxisBottomProps) => {
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
    <g className={styles.axisContainer}>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
        className={styles.line}
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            className={styles.label}
            style={{
              transform: "translateY(12px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}

      {/* Axis name */}
      <text className={styles.title} x={range[1]} y={30} textAnchor="end">
        {label}
      </text>
    </g>
  );
};
