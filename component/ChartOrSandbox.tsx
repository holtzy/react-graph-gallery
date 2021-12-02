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
    <>
      {!showSandbox && (
        <Button onClick={() => setShowSandbox(true)}>Show Sandbox</Button>
      )}
      {showSandbox && (
        <Button onClick={() => setShowSandbox(false)}>Hide Sandbox</Button>
      )}

      {showSandbox ? (
        <div className="">
          <CodeSandbox vizName={vizName} />
        </div>
      ) : (
        <div className="full-bleed grey-section flex justify-center flex-col">
          <div className="w-full flex justify-center">{children}</div>
        </div>
      )}
    </>
  );
};
