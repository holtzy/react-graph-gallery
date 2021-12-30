import { ReactNode, useRef, useState } from "react";
import { useDimensions } from "../hook/use-dimensions";
import { Button } from "./Button";
import { CodeSandbox } from "./CodeSandbox";

type ChartOrSandboxProps = {
  vizName: string;
  render: (dim: { width: number; height: number }) => ReactNode;
  height?: number;
  maxWidth?: number;
};

export const ChartOrSandbox = ({
  vizName,
  render,
  height = 300,
  maxWidth,
}: ChartOrSandboxProps) => {
  const [showSandbox, setShowSandbox] = useState(false);

  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div className="my-4">
      {showSandbox ? (
        <div className="">
          <CodeSandbox vizName={vizName} />
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div
            style={{ height, width: "100%", maxWidth }}
            ref={chartRef}
            className="flex justify-center border border-purple-300 rounded-md"
          >
            {render(chartSize)}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-2">
        <Button size="sm" onClick={() => setShowSandbox(!showSandbox)}>
          {showSandbox ? "Hide Sandbox" : "Show code"}
        </Button>
      </div>
    </div>
  );
};
