export const Graph = () => {
  return (
    <svg width={500} height={300} style={{ overflow: 'visible' }}>
      <path
        d="M0 40 L50 70 L100 150 L150 150 L200 200 L250 50 L300 90" // Transform this to make an area chart!
        fill="none"
        stroke="#69b3a2"
      />
    </svg>
  );
};
