import { useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { useCrossGraphInteraction } from "./cross-graph-interaction";
import styles from "./Barplot.module.css";

const NUMBER_OF_GROUP = 1500;

type BarplotProps = {
  width: number;
  height: number;
  color: string;
};

export const Barplot = ({ width, height, color }: BarplotProps) => {
  const ref = useRef<HTMLDivElement>(null);

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

  const highlightGroup = (group: string | null) => {
    if (!ref.current) return;

    const highlightedElements = ref.current.querySelectorAll(
      `.${styles.highlighted}`
    );

    for (const element of Array.from(highlightedElements)) {
      element.classList.remove(`${styles.highlighted}`);
    }

    if (!group) return;

    const elements = ref.current.querySelectorAll(".group_" + group);

    for (const element of Array.from(elements)) {
      element.classList.add(`${styles.highlighted}`);
    }
  };

  const emit = useCrossGraphInteraction((group) => highlightGroup(group));

  const allShapes = data.map((d, i) => {
    return (
      <div
        key={i}
        onMouseEnter={() => emit(String(i))}
        onMouseLeave={() => emit(null)}
        className={styles.barContainer + " " + "group_" + String(i)}
        style={{ width }}
      >
        <div
          className={styles.bar}
          style={{
            width: xScale(d),
            backgroundColor: color,
          }}
        />
        <div className={styles.text}>
          <p>{i}</p>
        </div>
      </div>
    );
  });

  return (
    <div ref={ref} style={{ width, height, overflow: "scroll" }}>
      {allShapes}
    </div>
  );
};
