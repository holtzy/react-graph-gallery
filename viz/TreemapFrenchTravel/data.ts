export type TreeNode = {
  type: 'node';
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  type: 'leaf';
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;

export const modeDeTransport: Tree = {
  type: "node",
  name: "Modes de transport",
  children: [
    {
      type: "node",
      name: "Temps",
      children: [
        { type: "leaf", name: "Marche", value: 12 },
        { type: "leaf", name: "Vélo", value: 5 },
        { type: "leaf", name: "2RM", value: 3 },
        { type: "leaf", name: "Voiture", value: 60 },
        { type: "leaf", name: "Bus et car", value: 10 },
        { type: "leaf", name: "Ferroviaire", value: 8 },
        { type: "leaf", name: "Avion", value: 0.5 },
        { type: "leaf", name: "Autres", value: 1.5 }
      ]
    },
    {
      type: "node",
      name: "Distance",
      children: [
        { type: "leaf", name: "Marche", value: 2 },
        { type: "leaf", name: "Vélo", value: 5 },
        { type: "leaf", name: "2RM", value: 20 },
        { type: "leaf", name: "Voiture", value: 50 },
        { type: "leaf", name: "Bus et car", value: 15 },
        { type: "leaf", name: "Ferroviaire", value: 100 },
        { type: "leaf", name: "Avion", value: 1000 },
        { type: "leaf", name: "Autres", value: 0.3 }
      ]
    },
    {
      type: "node",
      name: "Emissions",
      children: [
        { type: "leaf", name: "Marche", value: 0 },
        { type: "leaf", name: "Vélo", value: 0 },
        { type: "leaf", name: "2RM", value: 0.2 },
        { type: "leaf", name: "Voiture", value: 2.3 },
        { type: "leaf", name: "Bus et car", value: 0.8 },
        { type: "leaf", name: "Ferroviaire", value: 0.1 },
        { type: "leaf", name: "Avion", value: 10 },
        { type: "leaf", name: "Autres", value: 0.05 }
      ]
    },
    {
      type: "node",
      name: "Coût",
      children: [
        { type: "leaf", name: "Marche", value: 0 },
        { type: "leaf", name: "Vélo", value: 0.1 },
        { type: "leaf", name: "2RM", value: 0.5 },
        { type: "leaf", name: "Voiture", value: 5 },
        { type: "leaf", name: "Bus et car", value: 1.2 },
        { type: "leaf", name: "Ferroviaire", value: 2 },
        { type: "leaf", name: "Avion", value: 20 },
        { type: "leaf", name: "Autres", value: 0.3 }
      ]
    }
  ]
};
