type CursorProps = {
  x: number;
  y: number;
  height: number;
  color: string;
};

export const Cursor = ({ x, height }: CursorProps) => {
  return (
    <>
      <line x1={x} x2={x} y1={0} y2={height} stroke="black" strokeWidth={1} />
    </>
  );
};
