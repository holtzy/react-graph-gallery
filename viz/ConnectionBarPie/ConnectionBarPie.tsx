import { useState } from 'react';
import { data } from './data';
import { Barplot } from './Barplot';
import { PieChart } from './Piechart';

export const ConnectionBarPie = ({ width = 700, height = 400 }) => {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex' }}>
      <Barplot
        data={data}
        width={width / 2}
        height={height}
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
      />
      <PieChart
        data={data}
        width={width / 2}
        height={height}
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
      />
    </div>
  );
};
