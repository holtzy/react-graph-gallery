import * as d3 from "d3";
import styles from "./scatterplot.module.css";

type ScatterplotProps = {
  width: number;
  height: number;
  data: { lifeExp: number; gdpPercap: number }[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const yScale = d3.scaleLinear().domain([35, 85]).range([height, 0]);
  const xScale = d3.scaleLinear().domain([-500, 50000]).range([0, width]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={4}
        cx={xScale(d.gdpPercap)}
        cy={yScale(d.lifeExp)}
        className={styles.scatterplotCircle}
      />
    );
  });

  return (
    <div>
      <svg
        width={width}
        height={height}
        style={{
          borderWidth: "0px 0px 1px 1px",
        }}
      >
        {allShapes}
      </svg>
    </div>
  );
};
