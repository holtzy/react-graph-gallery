import { useSpring, animated } from 'react-spring';

type RectItemProps = {
  color: string;
  opacity: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
};

export const RectItem = ({
  x,
  y,
  opacity,
  width,
  height,
  color,
  value,
}: RectItemProps) => {
  const springProps = useSpring({
    from: {
      color: 'black',
      width: 0,
      opacity: 0,
      value: 0,
    },
    to: {
      color,
      width,
      opacity,
      value,
    },
    config: {
      friction: 5,
      tension: 15, // Lower tension will reduce bounce
    },
    delay: Math.random() * 50,
  });

  return (
    <>
      <animated.rect
        stroke="transparent"
        fill="white"
        opacity={springProps.opacity}
        width={springProps.width}
        height={height}
        x={x}
        y={y}
      />
      <animated.text
        x={springProps.width.to((width) => x + width + 10)}
        y={y + 8}
        stroke="transparent"
        fill="white"
        opacity={springProps.opacity}
        textAnchor={'start'}
        fontSize={10}
        fillOpacity={0.8}
      >
        {springProps.value.to((value) => value.toFixed(1) + ' %')}
      </animated.text>
    </>
  );
};
