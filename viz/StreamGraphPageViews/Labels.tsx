import * as d3 from 'd3';
import { useSpring, animated } from '@react-spring/web';

const PADDING_LEFT = 30;
const BAR_HEIGHT = 20;

type LabelsProps = {
  labelInfos: {
    color: string;
    value: number;
    position: number;
    name: string;
  }[];
  xStart: number;
  xEnd: number;
  biggestValue: number;
};

export const Labels = ({
  labelInfos,
  xStart,
  xEnd,
  biggestValue,
}: LabelsProps) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, biggestValue])
    .range([xStart + PADDING_LEFT, xEnd - 20]);

  const labels = labelInfos.map((label, i) => {
    const cleanValue = Math.floor(label.value / 1000000);

    return (
      <g key={i}>
        {/* Dashed Line between stream chart and label */}
        <line
          x1={xStart + 2}
          x2={xStart + PADDING_LEFT - 2}
          y1={label.position}
          y2={label.position}
          stroke="#808080"
          opacity={0.9}
          stroke-dasharray={2}
        />
        {/* Bar that creates a bar chart */}
        <BarItem
          color={label.color}
          x={xScale(0)}
          y={label.position - BAR_HEIGHT / 2}
          width={xScale(label.value) - xScale(0)}
        />
        {/* Name of the group */}
        <text
          x={xStart + PADDING_LEFT + 2}
          y={label.position}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}
          fill="#808080"
        >
          {label.name + ' | ' + cleanValue + 'M'}
        </text>
      </g>
    );
  });

  return <>{labels}</>;
};

type BarItemProps = {
  color: string;
  x: number;
  y: number;
  width: number;
};

export const BarItem = ({ color, x, y, width }: BarItemProps) => {
  const springProps = useSpring({
    to: {
      width,
    },
    config: {
      friction: 10,
      bounce: 0,
    },
  });

  return (
    <animated.rect
      x={x}
      y={y}
      width={springProps.width}
      height={BAR_HEIGHT}
      opacity={0.7}
      stroke={color}
      fill={color}
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};
