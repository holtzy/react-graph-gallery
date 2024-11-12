export const SvgDrawing = () => {
  return (
    <svg width={300} height={300}>
      <circle cx={20} cy={20} r={25} fill="red" />
      <circle cx={300 - 19} cy={300 - 19} r={25} fill="blue" />
      <circle cx={43} cy={300 - 12} r={25} fill="pink" />
    </svg>
  );
};
