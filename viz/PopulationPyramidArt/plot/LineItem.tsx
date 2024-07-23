import { useSpring, animated } from 'react-spring';

type LineItemProps = {
  path: string;
  color: string;
  opacity: number;
  hasDelay?: boolean;
};

export const LineItem = ({
  path,
  color,
  opacity,
  hasDelay = false,
}: LineItemProps) => {
  const springProps = useSpring({
    from: {
      color: hasDelay ? 'black' : color,
      opacity: hasDelay ? 0 : opacity,
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
    delay: hasDelay ? Math.random() * 500 : 0,
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
