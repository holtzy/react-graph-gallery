import { useState } from "react";
import { Button } from "./Button";
import { CodeSandbox } from "./CodeSandbox";

type ChartOrSandboxProps = {
  vizName: string;
  children: React.ReactNode;
};

export const ChartOrSandbox = ({ vizName, children }: ChartOrSandboxProps) => {
  const [showSandbox, setShowSandbox] = useState(false);

  return (
    <div className="my-4">
      {showSandbox ? (
        <div className="">
          <CodeSandbox vizName={vizName} />
        </div>
      ) : (
        <div className="w-full flex justify-center">{children}</div>
      )}

      <div className="flex justify-center mt-2">
        <Button size="sm" onClick={() => setShowSandbox(!showSandbox)}>
          {showSandbox ? "Hide Sandbox" : "Show code"}
        </Button>
      </div>
    </div>
  );
};
