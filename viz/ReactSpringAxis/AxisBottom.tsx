import { useMemo } from "react";
import { ScaleLinear } from "d3";
import { animated, useSpring, config } from "react-spring";

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

const Tick = ({ xOffset, value }: { xOffset: number; value: number }) => {
  const springProps = useSpring({
    to: { xOffset },
    config: config.molasses,
  });

  return (
    <animated.g transform={`translate(${xOffset}, 0)`}>
      <line y2={TICK_LENGTH} stroke="currentColor" />
      <text
        style={{
          fontSize: "10px",
          textAnchor: "middle",
          transform: "translateY(20px)",
        }}
      >
        {value}
      </text>
    </animated.g>
  );
};

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
      {ticks.map(({ value, xOffset }, i) => {
        return <Tick key={i} value={value} xOffset={xOffset} />;
      })}
    </>
  );
};
