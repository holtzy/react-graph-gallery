import { useSpring, animated } from 'react-spring';

type RectItemProps = {
  color: string;
  opacity: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  orientation: 'left' | 'right';
  center: number;
};

export const RectItem = ({
  x,
  y,
  opacity,
  width,
  height,
  color,
  value,
  orientation,
  center,
}: RectItemProps) => {
  const springProps = useSpring({
    from: {
      color: 'black',
      width: 0,
      opacity: 0,
      value: 0,
      x: center,
    },
    to: {
      color,
      width,
      opacity,
      value,
      x,
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
      {value > 0.1 && (
        <animated.text
          x={
            orientation === 'right'
              ? springProps.width.to((width) => x + width + 10)
              : springProps.x.to((x) => x - 10)
          }
          y={y + 8}
          stroke="transparent"
          fill="white"
          opacity={springProps.opacity}
          textAnchor={orientation === 'right' ? 'start' : 'end'}
          fontSize={10}
          fillOpacity={0.8}
        >
          {springProps.value.to((value) => value.toFixed(1) + ' %')}
        </animated.text>
      )}
    </>
  );
};
