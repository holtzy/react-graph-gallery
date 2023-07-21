import { BubbleMapDatasetTransition } from './BubbleMapDatasetTransition';

export const BubbleMapDatasetTransitionDemo = ({
  width = 700,
  height = 400,
}) => {
  if (width === 0) {
    return null;
  }
  return <BubbleMapDatasetTransition width={width} height={height} />;
};
