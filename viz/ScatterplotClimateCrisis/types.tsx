export type DataItem = {
  name: string;
  x: number; // vulnerability
  y: number; // readiness
  size: number; // CO2 emission
  color: string;
  categoryy: "RED" | "GREEN" | "YELLOW" | "BLUE";
  annotation?: "top" | "right" | "left" | "bottom";
};

export type ScatterplotProps = {
  width: number;
  height: number;
  data: DataItem[];
};
