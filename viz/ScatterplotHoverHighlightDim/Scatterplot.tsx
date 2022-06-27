import * as d3 from "d3";
import styles from "./scatterplot.module.css";

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

// Simplified version of a scatterplot
export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const yScale = d3.scaleLinear().domain([35, 85]).range([height, 0]);
  const xScale = d3.scaleLinear().domain([-3000, 55000]).range([0, width]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={8}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        className={styles.scatterplotCircle}
      />
    );
  });

  return (
    <div>
      <svg
        className={styles.svgArea}
        width={width}
        height={height}
        style={{
          borderWidth: "0px 0px 1px 1px",
          backgroundColor: "white",
        }}
      >
        {allShapes}
      </svg>
    </div>
  );
};
