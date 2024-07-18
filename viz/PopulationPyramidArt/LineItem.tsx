import { useSpring, animated } from 'react-spring';

type LineItemProps = {
  path: string;
  color: string;
  opacity: number;
};

export const LineItem = ({ path, color, opacity }: LineItemProps) => {
  const springProps = useSpring({
    to: {
      path,
      color,
      opacity,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      fill={'none'}
      stroke={color}
      strokeWidth={2}
      opacity={opacity}
    />
  );
};
