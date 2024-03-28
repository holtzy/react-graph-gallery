import { useState } from 'react';
import { data } from './data';
import { Radar } from './Radar';

const BUTTONS_HEIGHT = 50;

type RadarDatasetAnimationProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '0px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
};

export const RadarDatasetAnimation = ({
  width,
  height,
}: RadarDatasetAnimationProps) => {
  const allGroups = data.map((d) => d.name);
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupData = data.find((d) => d.name === selectedGroup);

  if (!groupData) {
    return null;
  }

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        {allGroups.map((group) => {
          return (
            <button
              key={group}
              style={buttonStyle}
              onClick={() => setSelectedGroup(group)}
            >
              group
            </button>
          );
        })}
      </div>
      <Radar
        data={groupData}
        width={width}
        height={height - BUTTONS_HEIGHT}
        axisConfig={[
          { name: 'speed', max: 10 },
          { name: 'acceleration', max: 10 },
          { name: 'conso', max: 10 },
          { name: 'safety', max: 2 },
          { name: 'style', max: 1000 },
          { name: 'price', max: 100 },
        ]}
      />
    </div>
  );
};
