import { useSpring, animated } from 'react-spring';

type LineItemProps = {
  path: string;
  color: string;
};

export const LineItem = ({ path, color }: LineItemProps) => {
  const springProps = useSpring({
    to: {
      path,
      color,
    },
    config: {
      friction: 50,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      fill={'none'}
      stroke={color}
      strokeWidth={2}
    />
  );
};
