import { useSpring, animated } from "@react-spring/web";
import styles from "./streamgraph.module.css";

type AnimatedPathItemProps = {
  path: string;
  color: string;
};

export const AnimatedPathItem = ({ path, color }: AnimatedPathItemProps) => {
  const springProps = useSpring({
    to: {
      path,
    },
    config: {
      friction: 100,
    },
    immediate: true,
  });

  return (
    <animated.path
      className={styles.shape}
      d={springProps.path}
      opacity={1}
      stroke="grey"
      fill={color}
      fillOpacity={0.8}
      cursor="pointer"
    />
  );
};
