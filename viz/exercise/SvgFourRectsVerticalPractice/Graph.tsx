// margin of 30 above and below

export const Graph = () => {
  return (
    <svg width={500} height={300}>
      <rect x={10} y={30} height={300 - 30 - 30} width={50} fill="red" />
    </svg>
  );
};
