export const polarToCartesian = (angle: number, distance: number) => {
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);
  return { x, y };
};
