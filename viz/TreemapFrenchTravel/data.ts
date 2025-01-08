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

export type Metric = "Déplacements" | "Temps" | "Distances" | "Emissions directes" | "Emissions avec Amt/traînées"

export type Tree = TreeNode | TreeLeaf;

export const modeDeTransport: Tree = {
  type: "node",
  name: "Modes de transport",
  children: [
    {
      type: "node",
      name: "Déplacements",
      children: [
        { type: "leaf", name: "Marche", value: 23.6 },
        { type: "leaf", name: "Vélo", value: 2.5 },
        { type: "leaf", name: "2RM", value: 1.0 },
        { type: "leaf", name: "Voiture", value: 64.0 },
        { type: "leaf", name: "Bus et car", value: 3.6 },
        { type: "leaf", name: "Ferroviaire", value: 4.7 },
        { type: "leaf", name: "Avion", value: 0.1 },
        { type: "leaf", name: "Autres", value: 0.4 }
      ]
    },
    {
      type: "node",
      name: "Temps",
      children: [
        { type: "leaf", name: "Marche", value: 15.3 },
        { type: "leaf", name: "Vélo", value: 2.0 },
        { type: "leaf", name: "2RM", value: 1.0 },
        { type: "leaf", name: "Voiture", value: 62.2 },
        { type: "leaf", name: "Bus et car", value: 5.8 },
        { type: "leaf", name: "Ferroviaire", value: 10.9 },
        { type: "leaf", name: "Avion", value: 2.2 },
        { type: "leaf", name: "Autres", value: 0.7 }
      ]
    },
    {
      type: "node",
      name: "Distances",
      children: [
        { type: "leaf", name: "Marche", value: 1.5 },
        { type: "leaf", name: "Vélo", value: 0.5 },
        { type: "leaf", name: "2RM", value: 0.8 },
        { type: "leaf", name: "Voiture", value: 65.2 },
        { type: "leaf", name: "Bus et car", value: 2.7 },
        { type: "leaf", name: "Ferroviaire", value: 8.6 },
        { type: "leaf", name: "Avion", value: 19.5 },
        { type: "leaf", name: "Autres", value: 1.1 }
      ]
    },
    {
      type: "node",
      name: "Emissions directes",
      children: [
        { type: "leaf", name: "Marche", value: 0.0 },
        { type: "leaf", name: "Vélo", value: 0.0 },
        { type: "leaf", name: "2RM", value: 0.7 },
        { type: "leaf", name: "Voiture", value: 79.4 },
        { type: "leaf", name: "Bus et car", value: 1.6 },
        { type: "leaf", name: "Ferroviaire", value: 0.2 },
        { type: "leaf", name: "Avion", value: 16.8 },
        { type: "leaf", name: "Autres", value: 1.3 }
      ]
    },
    {
      type: "node",
      name: "Emissions avec Amt/traînées",
      children: [
        { type: "leaf", name: "Marche", value: 0.0 },
        { type: "leaf", name: "Vélo", value: 0.0 },
        { type: "leaf", name: "2RM", value: 0.6 },
        { type: "leaf", name: "Voiture", value: 69.1 },
        { type: "leaf", name: "Bus et car", value: 1.4 },
        { type: "leaf", name: "Ferroviaire", value: 0.5 },
        { type: "leaf", name: "Avion", value: 27.2 },
        { type: "leaf", name: "Autres", value: 1.2 }
      ]
    }
  ]
};
