import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import styles from "./Barplot.module.css";

const NUMBER_OF_GROUP = 1500;

type BarplotProps = {
  width: number;
  height: number;
  group: number | null;
  setGroup: (group: number | null) => void;
  color: string;
};

export const Barplot = ({
  width,
  height,
  group,
  setGroup,
  color,
}: BarplotProps) => {
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

  useEffect(() => {
    highlightGroup(String(group));
  }, [group]);

  const allShapes = useMemo(() => {
    return data.map((d, i) => {
      return (
        <div
          key={i}
          onMouseEnter={() => setGroup(i)}
          onMouseLeave={() => setGroup(null)}
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
  }, [data, width, height, color]);

  return (
    <div ref={ref} style={{ width, height, overflow: "scroll" }}>
      {allShapes}
    </div>
  );
};
