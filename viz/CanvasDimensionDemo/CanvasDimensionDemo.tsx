import { useEffect, useState } from "react";
import { CodeBlock } from "../../component/UI/CodeBlock";

export const CanvasDimensionDemo = () => {
  // 2 ys: css and attribute dimensions
  const [canvasDimension, setCanvasDimension] = useState({
    width: 100,
    height: 100,
  });
  const [canvasCssDimension, setCanvasCssDimension] = useState({
    width: undefined,
    height: undefined,
  });

  // Add a diagonal in the canvas area
  useEffect(() => {
    const canvas = document.getElementById("canvasArea") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(100, 100);
    context.stroke();
  }, [canvasDimension, canvasCssDimension]);

  return (
    <div className="flex">
      <canvas
        id="canvasArea"
        style={{
          border: "1px solid",
          width: canvasCssDimension.width,
          height: canvasCssDimension.height,
        }}
        width={canvasDimension.width}
        height={canvasDimension.height}
      ></canvas>
      <div>
        <button
          onClick={() => {
            setCanvasDimension({ width: 100, height: 100 });
          }}
        >
          100
        </button>
        <button
          onClick={() => {
            setCanvasDimension({ width: 200, height: 200 });
          }}
        >
          200
        </button>
        <p>
          <CodeBlock
            code={
              "<canvas style={{ width: 200, height: 200 }} width=" +
              canvasDimension.width +
              " height=" +
              canvasDimension.height +
              " />"
            }
          />
        </p>
      </div>
    </div>
  );
};
