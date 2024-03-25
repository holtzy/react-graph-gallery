type AnnotationProps = {
  xScale: d3.ScaleLinear<number, number, never>;
  boundsHeight: number;
};

export const Annotation = ({ xScale, boundsHeight }: AnnotationProps) => {
  return (
    <>
      <defs>
        <pattern
          id="pattern_annotation"
          patternUnits="userSpaceOnUse"
          width="9.5"
          height="2.5"
          patternTransform="rotate(41)"
        >
          <line x1="0" y="0" x2="0" y2="9.5" stroke="#f2f2f2" strokeWidth="9" />
        </pattern>
      </defs>
      <rect
        x={xScale(1950)}
        width={xScale(2023) - xScale(1950)}
        y={0}
        height={boundsHeight}
        fill="url(#pattern_annotation)"
        opacity="1"
      />
      <text
        x={xScale(2000)}
        y={boundsHeight - 10}
        style={{
          fontSize: '13px',
          textAnchor: 'start',
          fill: '#797979',
        }}
        transform={
          'rotate(-90 ' + xScale(2000) + ' ' + (boundsHeight - 10) + ')'
        }
      >
        1950 - 2023
      </text>
    </>
  );
};
