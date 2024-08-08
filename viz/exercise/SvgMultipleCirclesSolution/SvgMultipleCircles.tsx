export const SvgMultipleCircles = () => {
  const numbers = [...Array(10).keys()];

  return (
    <svg width={500} height={300}>
      {numbers.map((i) => {
        return <circle key={i} cx={50 + i * 40} cy={150} r={20} fill="blue" />;
      })}
    </svg>
  );
};
