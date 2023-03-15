import { LollipopDatasetTransition } from "./LollipopDatasetTransition";

export const LollipopDatasetTransitionDemo = ({
  width = 700,
  height = 400,
}) => {
  if (!width || !height) {
    return null;
  }

  return <LollipopDatasetTransition width={width} height={height} />;
};
