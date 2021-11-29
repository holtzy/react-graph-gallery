// Each folder in the /src/viz folder is a codesandbox showing the related viz component
// Just pass the folder name to this component and it will embed the codesandbox
import React from "react";
import { Button } from "./Button";
import { CodeSandbox } from "./CodeSandbox";

type CodeSandboxButtonProps = {
  vizName: string;
};

export default function CodeSandboxButton({ vizName }: CodeSandboxButtonProps) {
  const [showSandbox, setShowSandbox] = React.useState(false);

  return (
    <>
      {!showSandbox && (
        <Button onClick={() => setShowSandbox(true)}>Show Sandbox</Button>
      )}
      {showSandbox && (
        <Button onClick={() => setShowSandbox(false)}>Hide Sandbox</Button>
      )}
      <br />
      <br />
      {showSandbox && <CodeSandbox vizName={vizName} />}
    </>
  );
}
