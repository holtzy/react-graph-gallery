import { useState } from "react";
import { CircularPackingDatasetTransition } from "./CircularPackingDatasetTransition";
import { data, data2, Tree } from "./data";

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
      <div>
        <button onClick={() => setDataset(data)}>Data 1</button>
        <button onClick={() => setDataset(data2)}>Data 2</button>
      </div>
      <CircularPackingDatasetTransition
        width={width}
        height={height}
        data={dataset}
      />
    </>
  );
};
