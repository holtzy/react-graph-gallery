// Each folder in the /src/viz folder is a codesandbox showing the related viz component
// Just pass the folder name to this component and it will embed the codesandbox
import React from 'react';

type CodeSandboxProps = {
  vizName: string;
  height?: string;
  fileToOpen?: string; // path to the file to open first in the sandbox
};

export const CodeSandbox = ({
  vizName,
  height = '500px',
  fileToOpen,
}: CodeSandboxProps) => {
  const url =
    'https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/' +
    vizName +
    '?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split' +
    (fileToOpen ? `&module=/${fileToOpen}` : '');

  console.log('rerendeeeerrrrr');

  return (
    <iframe
      src={url}
      style={{
        width: '100%',
        height: height,
        border: 'solid',
        borderWidth: 2,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};
