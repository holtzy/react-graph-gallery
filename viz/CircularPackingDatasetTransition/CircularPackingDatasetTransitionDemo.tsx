import { useState } from "react";
import { CircularPackingDatasetTransition } from "./CircularPackingDatasetTransition";
import { data, data2, Tree } from "./data";

const BUTTONS_HEIGHT = 50;

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const CircularPackingDatasetTransitionDemo = ({
  width = 700,
  height = 400,
}) => {
  const [dataset, setDataset] = useState<Tree>(data);

  if (width === 0) {
    return null;
  }
  return (
    <>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setDataset(data)}>
          Data 1
        </button>
        <button style={buttonStyle} onClick={() => setDataset(data2)}>
          Data 2
        </button>
      </div>
      <CircularPackingDatasetTransition
        width={width}
        height={height - BUTTONS_HEIGHT - 20}
        data={dataset}
      />
    </>
  );
};
