type GraphProps = {
  width: number;
  height: number;
};

export const Graph = ({ width, height }: GraphProps) => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  return (
    <div>
      <canvas id="myCanvas" width={width} height={height}></canvas>
    </div>
  );
};
