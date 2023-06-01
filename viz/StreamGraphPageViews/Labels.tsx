import * as d3 from "d3";

const PADDING_LEFT = 30;

type LabelsProps = {
  labelInfos: {
    color: string;
    value: number;
    position: number;
    name: string;
  }[];
  xStart: number;
};

export const Labels = ({ labelInfos, xStart }: LabelsProps) => {
  const labels = labelInfos.map((label, i) => {
    return (
      <g key={i}>
        <line
          x1={xStart}
          x2={xStart + PADDING_LEFT}
          y1={label.position}
          y2={label.position}
          stroke="#808080"
          opacity={0.9}
        />
        <text
          x={xStart + PADDING_LEFT}
          y={label.position}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={14}
          stroke="black"
          fill="none"
          opacity={1}
        >
          {label.name}
        </text>
      </g>
    );
  });

  return <>{labels}</>;
};
