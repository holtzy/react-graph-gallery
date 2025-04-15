import { useState } from 'react';
import { dataBarplot, dataStreamgraph } from './data';
import { StreamGraph } from './StreamGraph';
import { Barplot } from './Barplot';

export const App = ({ width = 700, height = 400 }) => {
  const [highlightedGroup, setHighlightedGroup] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex' }}>
      <StreamGraph
        data={dataStreamgraph}
        width={width / 2}
        height={height}
        highlightedGroup={highlightedGroup}
        setHighlightedGroup={setHighlightedGroup}
      />
      <Barplot
        data={dataBarplot}
        width={width / 2}
        height={height}
        highlightedGroup={highlightedGroup}
        setHighlightedGroup={setHighlightedGroup}
      />
    </div>
  );
};
