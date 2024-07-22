import { useSpring, animated } from 'react-spring';

type RectItemProps = {
  color: string;
  opacity: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

export const RectItem = ({
  x,
  y,
  opacity,
  width,
  height,
  color,
}: RectItemProps) => {
  const springProps = useSpring({
    from: {
      color: 'black',
      width: 0,
      opacity: 0,
    },
    to: {
      color,
      width,
      opacity,
    },
    config: {
      friction: 5,
      tension: 15, // Lower tension will reduce bounce
    },
    delay: Math.random() * 50,
  });

  return (
    <animated.rect
      stroke="transparent"
      fill="white"
      opacity={springProps.opacity}
      width={springProps.width}
      height={height}
      x={x}
      y={y}
    />
  );
};
