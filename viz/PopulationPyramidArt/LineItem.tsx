import { useSpring, animated } from 'react-spring';

type LineItemProps = {
  path: string;
  color: string;
  opacity: number;
};

export const LineItem = ({ path, color, opacity }: LineItemProps) => {
  console.log('path', path);

  const springProps = useSpring({
    from: {
      color: 'black',
      opacity: 0,
    },
    to: {
      path,
      color,
      opacity,
      strokeDashoffset: 100,
    },
    config: {
      friction: 5,
      tension: 15, // Lower tension will reduce bounce
    },
    delay: Math.random() * 10000,
  });

  return (
    <animated.path
      d={springProps.path}
      fill={'none'}
      stroke={springProps.color}
      strokeWidth={2}
      opacity={springProps.opacity}
    />
  );
};
