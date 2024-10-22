export const SvgDrawing = () => {
  return (
    <svg width={500} height={300}>
      <rect x={0} y={0} width={500} height={300} fill="grey" />
      <circle cx={500 / 2} cy={300 / 2} r={45} fill="blue" />
    </svg>
  );
};
