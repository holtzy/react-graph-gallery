import { useMemo } from "react";
import * as d3 from "d3";
import styles from "./shapes.module.css";

type ShapesProps = {
  width: number;
  height: number;
};

const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];

export const Shapes = ({ width, height }: ShapesProps) => {
  return (
    <svg style={{ width, height }} className={styles.container}>
      <circle
        className={styles.glowCircleInner}
        cx={width / 4}
        cy={height / 2}
        r={80}
      />
      <circle
        className={styles.glowCircleOuter}
        cx={width / 2}
        cy={height / 2}
        r={80}
      />
      <circle
        className={styles.glowCircleBoth}
        cx={(width * 3) / 4}
        cy={height / 2}
        r={80}
      />
    </svg>
  );
};
