export const SvgDrawing = () => {
  return (
    <svg width={500} height={300}>
      <circle cx={20} cy={20} r={25} fill="red" />
      <circle cx={500 - 19} cy={500 - 19} r={25} fill="blue" />
      <circle cx={43} cy={300 - 12} r={25} fill="pink" />
    </svg>
  );
};
