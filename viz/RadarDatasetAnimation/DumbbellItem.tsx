import { useSpring, animated } from '@react-spring/web';

type DumbbellItemProps = {
  xValue1: number;
  xValue2: number;
  y: number;
  color: string;
};

type AnimatedProps = {
  xValue1: number;
  xValue2: number;
  color: string;
};

export const DumbbellItem = (props: DumbbellItemProps) => {
  const { xValue1, xValue2, y, color } = props;

  const springProps = useSpring<AnimatedProps>({
    // the 'from' properties will be used only to animate the initialization of the component
    // if you put nothing it will be initialized with the first prop that is provided
    from: {
      xValue1: 0,
      xValue2: 0,
      color,
    },
    to: {
      xValue1: xValue1,
      xValue2: xValue2,
      y,
      color,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.line
        x1={springProps.xValue1}
        y1={y}
        y2={y}
        x2={springProps.xValue2}
        opacity={1}
        stroke="grey"
        strokeWidth={1}
      />
      <animated.circle
        cy={y}
        cx={springProps.xValue1}
        opacity={1}
        stroke={color}
        fill={color}
        strokeWidth={1}
        r={5}
      />
      <animated.text
        y={y}
        x={springProps.xValue1.to((x) => x - 10)}
        opacity={1}
        color={color}
        fontSize={12}
        alignmentBaseline={'central'}
        textAnchor={'end'}
      >
        {springProps.xValue1.to((x) => Math.round(x))}
      </animated.text>
      <animated.circle
        cy={y}
        cx={springProps.xValue2}
        opacity={1}
        stroke={color}
        fill={color}
        strokeWidth={1}
        r={5}
      />
      <animated.text
        y={y}
        x={springProps.xValue2.to((x) => x + 10)}
        opacity={1}
        color={color}
        fontSize={12}
        alignmentBaseline={'central'}
        textAnchor={'start'}
      >
        {springProps.xValue2.to((x) => Math.round(x))}
      </animated.text>
    </g>
  );
};
