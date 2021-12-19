import { useState } from "react";
import ReactDOM from "react-dom";
import { CircularPackingDatasetTransition } from "./CircularPackingDatasetTransition";
import { data, data2, Tree } from "./hierarchy-1-level-random";

const Content = () => {
  const [dataset, setDataset] = useState<Tree>(data);

  return (
    <>
      <div>
        <button onClick={() => setDataset(data)}>Data 1</button>
        <button onClick={() => setDataset(data2)}>Data 2</button>
      </div>
      <CircularPackingDatasetTransition
        width={400}
        height={300}
        data={dataset}
      />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Content />, rootElement);
