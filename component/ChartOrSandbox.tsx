import { ReactNode, useRef, useState } from "react";
import { useDimensions } from "../hook/use-dimensions";
import { Button } from "./UI/Button";
import { Caption } from "./UI/Caption";
import { CodeSandbox } from "./CodeSandbox";

type ChartOrSandboxProps = {
  VizComponent: (props: {
    width: number;
    height: number;
  }) => JSX.Element | null; // A component that calls the viz component (e.g. heatmap) with everything needed except width and height
  vizName: string;
  height?: number;
  maxWidth?: number;
  caption?: string | HTMLElement | Element;
};

export const ChartOrSandbox = ({
  VizComponent,
  vizName,
  height = 400,
  maxWidth = 800,
  caption,
}: ChartOrSandboxProps) => {
  const [showSandbox, setShowSandbox] = useState(false);

  // the chart / sandbox will fill the available space until maxWidth is reached
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  return (
    // Add a full screen width wrapper with grey background around everything.
    // It has to be "relative". Note that it goes out of the article container if necessary!
    <div
      style={{ marginLeft: "-50vw", left: "50%" }}
      className="my-4 py-4 w-screen relative"
    >
      {showSandbox ? (
        <div className="flex flex-col items-center justify-center w-full">
          <div style={{ maxWidth: 2000 }} className="w-full z-50">
            <CodeSandbox vizName={vizName} />
          </div>
          <div className="flex justify-center mt-2">
            <Button size="sm" onClick={() => setShowSandbox(!showSandbox)}>
              Hide Sandbox
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-50 w-screen flex justify-center">
            <div style={{ height, width: "100%", maxWidth }} ref={chartRef}>
              <VizComponent height={height} width={chartSize.width} />
            </div>
          </div>
          <Caption>{caption}</Caption>
          <div className="flex justify-center">
            <Button size="sm" onClick={() => setShowSandbox(!showSandbox)}>
              Show code
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
