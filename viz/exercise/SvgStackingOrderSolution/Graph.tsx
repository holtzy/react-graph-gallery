export const Graph = () => {
  return (
    <svg width={500} height={300}>
      <rect width="100%" height="100%" fill="grey" />
      <circle cx="250" cy="150" r="100" fill="yellow" />
      <text
        x="250"
        y="150"
        textAnchor="middle"
        dy=".3em"
        fontSize="20"
        fill="black"
      >
        Hello
      </text>
    </svg>
  );
};
