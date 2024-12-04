import { useSpring, animated, config } from '@react-spring/web';

type RectangleProps = {
  width: number;
  height: number;
  x: number;
  y: number;
  label: string;
  value: number;
  color: string;
};

export const Rectangle = (props: RectangleProps) => {
  const { x, y, width, height, label, value, color } = props;

  const springProps = useSpring({
    to: { x, y, width, height, value },
    config: config.molasses,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <g>
      <animated.rect
        key={label}
        x={springProps.x}
        y={springProps.y}
        width={springProps.width}
        height={springProps.height}
        opacity={0.7}
        stroke={color}
        fill={color}
        fillOpacity={0.9}
        strokeWidth={1}
        rx={1}
      />
      <animated.text
        x={springProps.x.to((x) => x + 3)}
        y={springProps.y.to((y) => y + 3)}
        fontSize={12}
        textAnchor="start"
        alignmentBaseline="hanging"
        fill="white"
        className="font-bold"
      >
        {label}
      </animated.text>
      <animated.text
        x={springProps.x.to((x) => x + 3)}
        y={springProps.y.to((y) => y + 18)}
        fontSize={12}
        textAnchor="start"
        alignmentBaseline="hanging"
        fill="white"
        className="font-light"
      >
        {springProps.value.to((val) => Math.round(val))}
      </animated.text>
    </g>
  );
};
