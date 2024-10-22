export const Graph = () => {
  return (
    <svg width={500} height={300}>
      <rect
        x={10 + 0 * (50 + 10)}
        y={30}
        height={300 - 30 - 30}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 1 * (50 + 10)}
        y={130}
        height={200 - 30 - 30}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 2 * (50 + 10)}
        y={230}
        height={100 - 30 - 30}
        width={50}
        fill="red"
      />
      <rect
        x={10 + 3 * (50 + 10)}
        y={330}
        height={100 - 30 - 30}
        width={50}
        fill="red"
      />
    </svg>
  );
};
