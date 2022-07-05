import { data } from "./data";
import { BoxplotToViolinTransition } from "./BoxplotToViolinTransition";

export const BoxplotToViolinTransitionDemo = ({
  width = 700,
  height = 400,
}) => <BoxplotToViolinTransition data={data} width={width} height={height} />;
