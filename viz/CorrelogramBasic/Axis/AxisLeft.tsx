import { useMemo } from "react";
import { ScaleLinear } from "d3";

import styles from "./axis.module.css";

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  label?: string;
};

// tick length
const TICK_LENGTH = 3;

export const AxisLeft = ({ yScale, pixelsPerTick, label }: AxisLeftProps) => {
  const range = yScale.range();

  const ticks = useMemo(() => {
    const height = range[0] - range[1];
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [yScale]);

  return (
    <g className={styles.axisContainer}>
      {/* Main vertical line */}
      <path
        d={["M", 0, range[0], "L", 0, range[1]].join(" ")}
        fill="none"
        stroke="black"
        strokeWidth={0.5}
        className={styles.line}
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              transform: "translateX(-20px)",
            }}
            className={styles.label}
            x={10}
          >
            {value}
          </text>
        </g>
      ))}

      {/* Axis name */}
      <text
        className={styles.title}
        x={0}
        y={-30}
        textAnchor="end"
        transform="rotate(-90)"
      >
        {label}
      </text>
    </g>
  );
};
