import { BarplotDatasetTransition } from "./BarplotDatasetTransition";

export const BarplotDatasetTransitionDemo = ({ width = 700, height = 400 }) => {
  if (!width || !height) {
    return null;
  }

  return <BarplotDatasetTransition width={width} height={height} />;
};
