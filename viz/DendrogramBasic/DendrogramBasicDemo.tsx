import { stratify } from "d3";
import { data, data2 } from "./data";
import { Dendrogram } from "./Dendrogram";

export const DendrogramBasicDemo = ({ width = 700, height = 400 }) => {
  // stratify the data: reformatting for d3.js
  const hierarchyGenerator = stratify<{
    name: string;
    parent: string;
  }>()
    .id((node) => node.name)
    .parentId((node) => node.parent);

  const hierarchy = hierarchyGenerator(data2);

  console.log(hierarchy);

  return <Dendrogram data={data} width={width} height={height} />;
};
