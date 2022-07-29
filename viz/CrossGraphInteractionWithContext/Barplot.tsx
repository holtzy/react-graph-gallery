import { useMemo, useState } from "react";
import * as d3 from "d3";
import { useCrossGraphInteraction } from "./cross-graph-interaction";
import styles from "./Barplot.module.css";

const NUMBER_OF_GROUP = 3;

type BarplotProps = {
  width: number;
  height: number;
  color: string;
};

export const Barplot = ({ width, height, color }: BarplotProps) => {
  const [group, setGroup] = useState<number | null>(null);

  // Create a fake dataset when component mounts
  const data = useMemo(() => {
    let data = [];
    while (data.length < NUMBER_OF_GROUP) {
      const randomVal = Math.floor(Math.random() * 100) + 1;
      data.push(randomVal);
    }
    return data;
  }, []);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 100]).range([0, width]);
  }, [width]);

  const emit = useCrossGraphInteraction((group) => setGroup(Number(group)));

  const allShapes = data.map((d, i) => {
    return (
      <div
        key={i}
        // onMouseEnter={() => emit(String(i))}
        // onMouseLeave={() => emit(null)}
        className={styles.barContainer}
        style={{ width }}
      >
        <div
          className={styles.bar}
          style={{
            width: xScale(d),
            backgroundColor: color,
          }}
        />
        <div
          className={styles.text}
          style={{
            position: "absolute",
            height: "100%",
            fontSize: 8,
            marginLeft: 4,
            marginTop: 2,
            color: "grey",
          }}
        >
          <p>{i}</p>
        </div>
      </div>
    );
  });

  return <div style={{ width, height, overflow: "scroll" }}>{allShapes}</div>;
};
