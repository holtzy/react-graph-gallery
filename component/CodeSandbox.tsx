// Each folder in the /src/viz folder is a codesandbox showing the related viz component
// Just pass the folder name to this component and it will embed the codesandbox
import React from "react";

type CodeSandboxProps = {
  vizName: string;
};

export const CodeSandbox = ({ vizName }: CodeSandboxProps) => {
  const url =
    "https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/pages/viz/" +
    vizName +
    "?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";

  return (
    <iframe
      src={url}
      style={{
        width: "100%",
        height: "500px",
        border: "solid",
        borderWidth: 2,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};
<iframe
  src="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/pages/viz/CircularPackingBasic?expanddevtools=1&fontsize=14&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="violin-plot-basic"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>;
