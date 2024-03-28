import { useSpring, animated } from '@react-spring/web';

type DumbbellItemProps = {
  name: string;
  xValue1: number;
  xValue2: number;
  y: number;
};

type AnimatedProps = {
  barWidth: number;
  xValue1: number;
  xValue2: number;
  valueOpacity: number;
  y: number;
};

export const DumbbellItem = (props: DumbbellItemProps) => {
  const { name, xValue1, xValue2, y } = props;

  const springProps = useSpring<AnimatedProps>({
    // the 'from' properties will be used only to animate the initialization of the component
    // if you put nothing it will be initialized with the first prop that is provided
    from: {
      xValue1: 0,
      xValue2: 0,
      valueOpacity: 0,
    },
    to: {
      xValue1: xValue1,
      xValue2: xValue2,
      valueOpacity: 1,
      y,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.line
        x1={springProps.xValue1}
        y1={springProps.y}
        y2={springProps.y}
        x2={springProps.xValue2}
        opacity={0.7}
        stroke="grey"
        strokeWidth={1}
      />
      <animated.circle
        cy={springProps.y}
        cx={springProps.xValue1}
        opacity={0.7}
        stroke="#69b3a2"
        fill="#69b3a2"
        strokeWidth={1}
        r={5}
      />
      <animated.circle
        cy={springProps.y}
        cx={springProps.xValue2}
        opacity={0.7}
        stroke="#9d174d"
        fill="#9d174d"
        strokeWidth={1}
        r={5}
      />
      <animated.text
        x={-7}
        y={springProps.y}
        textAnchor="end"
        alignmentBaseline="central"
        fontSize={12}
      >
        {name}
      </animated.text>
    </g>
  );
};
