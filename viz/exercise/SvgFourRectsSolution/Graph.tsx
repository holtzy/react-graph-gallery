export const Graph = () => {
  return (
    <svg width={500} height={300}>
      <rect x={20} y={20 + 0 * (20 + 10)} height={40} width={400} fill="red" />
      <rect x={20} y={20 + 1 * (20 + 10)} height={40} width={300} fill="red" />
      <rect x={20} y={20 + 2 * (20 + 10)} height={40} width={200} fill="red" />
      <rect x={20} y={20 + 3 * (20 + 10)} height={40} width={100} fill="red" />
    </svg>
  );
};
