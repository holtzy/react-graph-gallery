import styles from "./streamgraph.module.css";
import { interpolate } from "flubber";
import { useMemo, useRef } from "react";
import { animated, useSpring, config, to } from "react-spring";

type AnimatedPathItemProps = {
  path: string;
  color: string;
};

export const AnimatedPathItem = ({ path, color }: AnimatedPathItemProps) => {
  // keep track of last used pathD to interpolate from
  const currD = useRef(path);

  // create an interpolator that maps from the current shape (at t=0) to the new provided path (at t=1)
  const pathInterpolator = useMemo(
    () => interpolate(currD.current, path),
    [path]
  );

  // create a spring that maps from t = 0 (start animation) to t = 1 (end of animation)
  const springProps = useSpring({
    from: { t: 0 },
    to: { t: 1 },
    // reset t to 0 when the path changes so we can begin interpolating anew
    reset: currD.current !== path,
    // when t updates, update the last seen D so we can handle interruptions
    onChange: ({ t }) => {
      currD.current = pathInterpolator(t || 1);
    },
    config: config.molasses,
  });

  return (
    <animated.path
      d={to(springProps.t, pathInterpolator)}
      className={styles.shape}
      opacity={1}
      stroke="grey"
      fill={color}
      fillOpacity={0.8}
      cursor="pointer"
    />
  );
};
