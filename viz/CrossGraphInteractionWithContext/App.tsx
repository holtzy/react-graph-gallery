import { useMemo, useState } from "react";
import { Barplot } from "./Barplot";
import { CrossGraphInteractionProvider } from "./cross-graph-interaction";

type AppProps = {
  width: number;
  height: number;
};

export const App = ({ width, height }: AppProps) => {
  const [group, setGroup] = useState<number | null>(null);

  if (!width || !height) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        width,
        height,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <CrossGraphInteractionProvider>
        <Barplot
          width={300}
          height={220}
          group={group}
          setGroup={setGroup}
          color={"#e85252"}
        />
        <Barplot
          width={300}
          height={220}
          group={group}
          setGroup={setGroup}
          color={"#6689c6"}
        />
        <Barplot
          width={300}
          height={220}
          group={group}
          setGroup={setGroup}
          color={"#9a6fb0"}
        />
        <Barplot
          width={300}
          height={220}
          group={group}
          setGroup={setGroup}
          color={"#a53253"}
        />
      </CrossGraphInteractionProvider>
    </div>
  );
};
