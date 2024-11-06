import { useEffect, useMemo, useRef } from 'react';
import { ScaleLinear } from 'd3';
import { animated, useSpring, config } from 'react-spring';

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

const Tick = ({
  xOffset,
  value,
  prevScale,
}: {
  xOffset: number;
  value: number;
  prevScale: ScaleLinear<number, number>;
}) => {
  const prevPosition = prevScale(value);
  const springProps = useSpring({
    from: { xOffset: prevPosition > xOffset ? prevPosition : xOffset },
    to: { xOffset },
    config: config.molasses,
    reset: true,
  });

  return (
    <animated.g transform={springProps.xOffset.to((v) => `translate(${v}, 0)`)}>
      <line y2={TICK_LENGTH} stroke="currentColor" />
      <text
        style={{
          fontSize: '10px',
          textAnchor: 'middle',
          transform: 'translateY(20px)',
        }}
      >
        {value}
      </text>
    </animated.g>
  );
};

export const AxisBottom = ({ xScale, pixelsPerTick }: AxisBottomProps) => {
  const range = xScale.range();
  const width = range[1] - range[0];
  const numberOfTicksTarget = Math.floor(width / pixelsPerTick);
  const ticks = xScale.ticks(numberOfTicksTarget);

  const prevMyPropRef = useRef(xScale);
  useEffect(() => {
    prevMyPropRef.current = xScale;
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={['M', range[0], 0, 'L', range[1], 0].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map((value, i) => {
        return (
          <Tick
            key={value}
            value={value}
            xOffset={xScale(value)}
            prevScale={prevMyPropRef.current}
          />
        );
      })}
    </>
  );
};
