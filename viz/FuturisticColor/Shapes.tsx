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
    <div style={{ width, height }} className={styles.container}>
      <div className={styles.glowCircleInner} />
      <div className={styles.glowCircleOuter} />
      <div className={styles.glowCircleBoth} />
    </div>
    // <svg width={width} height={height}>
    //   <rect width={width} height={height} fill="black" />
    //   <circle
    //     cx={width / 2}
    //     cy={height / 2}
    //     r={80}
    //     fill={"hsl(50 100% 10%)"}
    //     stroke={"hsl(50 100% 80%)"}
    //     strokeWidth={4}
    //   />
    // </svg>
  );
};
