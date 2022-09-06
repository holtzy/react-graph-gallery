import { MARGIN } from "./constants";
import { Histogram } from "./Histogram";
import { Scatterplot } from "./Scatterplot";

type CorrelogramProps = {
  width: number;
  height: number;
  data: {
    sepalLength: number;
    sepalWidth: number;
    petalLength: number;
    petalWidth: number;
    species: "setosa" | "virginica";
  }[];
};

export const Correlogram = ({ width, height, data }: CorrelogramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allVariables = [
    "sepalLength",
    "sepalWidth",
    "petalLength",
    "petalWidth",
  ] as const;

  const allGroups = [...new Set(data.map((d) => d.species))];

  const graphWidth = boundsWidth / allVariables.length;
  const graphHeight = boundsHeight / allVariables.length;

  const allGraphs = allVariables.map((yVar, i) => {
    return allVariables.map((xVar, j) => {
      // If x and y variables are the same (diagonal), use a distribution instead.
      if (xVar === yVar) {
        const distributionData = allGroups.map((group) => {
          return {
            group,
            values: data.filter((d) => d.species === group).map((d) => d[xVar]),
          };
        });

        return (
          <Histogram
            width={graphWidth}
            height={graphHeight}
            data={distributionData}
            limits={[0, 8]}
          />
        );
      }

      // Scatterplot dataset
      const graphData = data.map((d) => {
        return { x: d[xVar], y: d[yVar], group: d.species };
      });

      return (
        <div key={i + "-" + j}>
          <Scatterplot
            width={graphWidth}
            height={graphHeight}
            data={graphData}
            yLabel={j === 0 ? allVariables[i] : undefined}
            xLabel={i === allVariables.length - 1 ? allVariables[j] : undefined}
          />
        </div>
      );
    });
  });

  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr", // TODO
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
        }}
      >
        {allGraphs}
      </div>
    </div>
  );
};
