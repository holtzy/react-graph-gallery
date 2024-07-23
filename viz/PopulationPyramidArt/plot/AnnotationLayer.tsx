type AnnotationLayerProps = {
  width: number;
  height: number;
  marginTop: number;
};

export const AnnotationLayer = ({
  width,
  height,
  marginTop,
}: AnnotationLayerProps) => {
  return (
    <>
      <text
        x={width / 2}
        y={15}
        fill="white"
        opacity={0.3}
        fontSize={10}
        alignmentBaseline="central"
        textAnchor="middle"
      >
        100 years old
      </text>
      <line
        x1={width / 2 - 5}
        y1={32}
        x2={width / 2 + 5}
        y2={32}
        stroke="white"
        opacity={1}
        strokeWidth={0.5}
      />

      <text
        x={width / 2}
        y={height - 15}
        fill="white"
        opacity={0.3}
        fontSize={10}
        alignmentBaseline="central"
        textAnchor="middle"
      >
        0 years old
      </text>
      <line
        x1={width / 2 - 5}
        y1={height - marginTop}
        x2={width / 2 + 5}
        y2={height - marginTop}
        stroke="white"
        opacity={1}
        strokeWidth={0.5}
      />
    </>
  );
};
