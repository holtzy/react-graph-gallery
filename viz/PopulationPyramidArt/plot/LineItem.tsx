import { useSpring, animated } from 'react-spring';

type LineItemProps = {
  path: string;
  color: string;
  opacity: number;
};

export const LineItem = ({ path, color, opacity }: LineItemProps) => {
  const springProps = useSpring({
    from: {
      color: 'black',
      opacity: 0,
    },
    to: {
      path,
      color,
      opacity,
    },
    config: {
      friction: 5,
      tension: 15, // Lower tension will reduce bounce
    },
    delay: Math.random() * 500,
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
