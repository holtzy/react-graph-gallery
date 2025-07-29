import React from 'react';
import { VoronoiTreemap } from './VoronoiTreemap';
import { data } from './data';

export const VoronoiTreemapDemo = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <VoronoiTreemap data={data} width={600} height={400} />
    </div>
  );
};
