import { useMemo } from "react";
import * as d3 from "d3";

const NUMBER_OF_GROUP = 500;

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

  const allShapes = data.map((d, i) => {
    return (
      <div
        key={i}
        onMouseEnter={() => setGroup(i)}
        onMouseLeave={() => setGroup(null)}
        style={{ width, height: 15, position: "relative", margin: 1 }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: xScale(d),
            backgroundColor: color,
            opacity: group === i ? 1 : 0.4,
            borderRadius: 2,
          }}
        />
        <div
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
