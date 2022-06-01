import { useEffect, useRef } from "react";

type CanvasShapeProps = {
  width: number;
  height: number;
};

export const CanvasShape = ({ width, height }: CanvasShapeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;

    // create the canvas context, ready to draw
    const context = canvas?.getContext("2d");
    if (!context) {
      return;
    }

    // Draw whatever shape
    context.lineWidth = 15;
    context.beginPath();
    context.moveTo(width / 2, 20);
    context.lineTo(width - 20, height / 2);
    context.lineTo(width / 2, height - 20);
    context.lineTo(20, height / 2);
    context.lineTo(width / 2, height / 2);
    context.stroke();
  }, [width, height]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
          backgroundColor: "#afb8c133",
        }}
        width={width}
        height={height}
      />
    </div>
  );
};
