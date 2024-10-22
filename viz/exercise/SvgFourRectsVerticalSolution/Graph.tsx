export const Graph = () => {
  return (
    <svg width={500} height={300}>
      <rect
        x={10 + 0 * (50 + 10)}
        y={300 - 250}
        height={250}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 1 * (50 + 10)}
        y={300 - 200}
        height={200}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 2 * (50 + 10)}
        y={300 - 150}
        height={150}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 3 * (50 + 10)}
        y={300 - 100}
        height={100}
        width={50}
        fill="red"
      />
    </svg>
  );
};
