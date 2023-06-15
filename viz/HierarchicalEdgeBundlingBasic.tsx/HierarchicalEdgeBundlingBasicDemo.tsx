import { data } from "./data";
import { HierarchicalEdgeBundling } from "./HierarchicalEdgeBundling";

export const HierarchicalEdgeBundlingBasicDemo = ({
  width = 700,
  height = 400,
}) => <HierarchicalEdgeBundling data={data} width={width} height={height} />;
