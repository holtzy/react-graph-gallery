export type TreeNode = {
  type: 'node';
  value: number;
  name: string;
  children: Tree[];
};

export type TreeLeaf = {
  type: 'leaf';
  name: string;
  value: number;
  links: string[];
};

export type Tree = TreeNode | TreeLeaf;

export const data: Tree = {
  type: "node",
  name: "boss",
  value: 0,
  children: [
    {
      type: "node",
      name: "Team Dataviz",
      value: 0,
      children: [
        { type: "leaf", name: "Mark", value: 90, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Robert", value: 12, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Emily", value: 34, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Marion", value: 53, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Edy", value: 53, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Gab", value: 53, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Yan", value: 53, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
      ],
    },
    {
      type: "node",
      name: "Team DevOps",
      value: 0,
      children: [
        { type: "leaf", name: "Nicolas", value: 98, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Malki", value: 22, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Djé", value: 12, links: ['Robert', 'Einstein'] },
        { type: "leaf", name: "Joe", value: 12, links: ['Robert', 'Einstein'] },
        { type: "leaf", name: "Karl", value: 12, links: ['Joe', 'Mam'] },
        { type: "leaf", name: "Mam", value: 12, links: ['Karl'] },
        { type: "leaf", name: "Toto", value: 12, links: ['Karl'] },
        { type: "leaf", name: "Tuck", value: 12, links: ['Yam'] },
        { type: "leaf", name: "Yam", value: 12, links: ['Toto', 'Karl'] },
      ],
    },
    {
      type: "node",
      name: "Team Sales",
      value: 0,
      children: [
        { type: "leaf", name: "Mélanie", value: 45, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
        { type: "leaf", name: "Einstein", value: 76, links: ['Robert', 'Emily', 'Marion', 'Malki', 'Einstein'] },
      ],
    },
  ],
};
